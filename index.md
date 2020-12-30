---
layout: default
title: Main
---

# Hey, welcome!

This is a project for remote online jamming via live coding.
The system uses a SonicPi server as sound engine which you can send commands / music generating code to via this webpage. The music from all users gets mixed down and streamed to this website via a standard HTTP audio stream:

 <audio controls>
  <source src="https://klingklangflut.de/klingklang.ogg" type="audio/ogg">
  Your browser does not support the audio tag.
</audio> 

You can use all commands and syntax that are supported by SonicPi. Below, we provided a few simple code snippets and examples to get you started. But there is also a great tutorial about the SonicPi language and lots of code snippets from others on the internet.

In online jamming, it's very important that music is in sync with others. To ensure this, SonicPi has a concept called cues. The server provides a basic metronome cue, which we kindly ask you to use in order to sync up with the rest. See code snippets below!

In general, don't be afraid, just play around and have fun. It's just sounds :)

<textarea id="codeEditor" name="code-editor" aria-label='Editor for sonic pi commands' code-editor></textarea>

<button type="button" submit-code>Send</button> 

# Basic commands

Playing a note
```ruby
play :c4
```

Playing a tone ladder
```ruby
play :c4
sleep 1
play :d4
sleep 1
play :e4
```

Playing a chord
```ruby
play :c4
play :d4
play :e4
```

Playing a chord, better
```ruby
play (chord :c4, :major)
```

Use a live loop to loop your code and sync up with others
```ruby
live_loop :loopname
  sync :metro

  play (chord :c4, :major)
  sleep 1
end
```
`:loopname` can be an arbitrary name that identifies the loop. Please note that your loop keeps existing and playing even if you close this webpage. So please consider stopping your loop when you leave by overwriting your loop with an emtpy one, or simply by writing `stop` as first command within your loop:

```ruby
live_loop :loopname
  sync :metro

  stop
  play (chord :c4, :major)
  sleep 1
end
```

The `sleep` time is in units of a beat. Also fractional values are possible to get eighth (0.5) etc.


# Use different sounds / synths
```ruby
use_synth :tb303
```
Other synth are e.g. `:pulse`, `:dsaw`, `:fm`, `:prophet`. See [https://github.com/sonic-pi-net/sonic-pi/blob/main/etc/doc/cheatsheets/synths.md]() for a full list of available synths.

You can control the parameters of the synths using e.g. `use_synth_defaults attack: 0.1, release: 0.7, cutoff: 50`. These parameters can also be appended to the `play` command.

# Playing samples
The system has a lot of nice samples which you can use and mangle.

Playing a sample
```ruby
sample :loop_amen
```

There are lots of drum samples like `:drum_heavy_kick`, or `:drum_snare_hard`. But there are also other kinds of loops and samples like `:ambi_drone` or `:loop_3d_printer`. Get a full list here: [https://github.com/sonic-pi-net/sonic-pi/blob/main/etc/doc/cheatsheets/samples.md]()

You can mangle the loop using beat stretch, speed (also reverse), and filtering, e.g.
```ruby
sample :loop_amen, beat_stretch: 4, cutoff: 70
```
Other parameters are `rate: 0,5`, `rate: -1` (for reverse). There is also `rpitch 2` for transposing in semitones.

# Using FX

You can embed your code in fx blocks:

```ruby
live_loop :loopname do
  sync :metro
	
  with_fx :reverb, room: 2, do
    play :c4
    sleep 1
  end
end
```
A full list of all effects and there parameters can be found here: [https://github.com/sonic-pi-net/sonic-pi/blob/main/etc/doc/cheatsheets/fx.md]()

# More advanced snippets

Many examples can be found on github: <https://github.com/sonic-pi-net/sonic-pi/tree/main/etc/examples>, <https://gist.github.com/darinwilson/137764d4b06072de626c>, and <https://github.com/hopbit/sonic-pi-snippets>
