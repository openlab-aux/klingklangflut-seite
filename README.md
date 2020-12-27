# Webseite für Klingklangflut

## Setup (lokal)

1. Ruby installieren (aufgesetzt wurde es mit Ruby 2.6.6. Ich empfehle rbenv oder RVM zum managen der Ruby-Version.)
2. Bundler installieren: `gem install bundler`
3. Bundeln: `bundle install`
4. Lokalen development server starten mit `bundle exec jekyll serve`
5. <http://localhost:4000/> aufrufen


## Weiterentwicklung

Texte, die auf der Webseite stehen sollen, in die `index.md` einfügen (Markdown). Wenn `jekyll serve` lokal läuft, wird das HTML und CSS für die Seite nach Speichern automatisch neu generiert (siehe Ordner `_sites`. Dort keine Änderungen machen, das wird sonst von Jekyll wieder überschrieben!)

Styles im `_sass` order hinzufügen. `main.sass` ist das Hauptfile, in dem alle anderen files importiert werden müssen. Sass ist wie CSS mit ein paar Nettigkeiten, wie mixins, weniger Klammern und ohne Semikolons. Jekyll wird das nach CSS übersetzen.

Unter <http://localhost:4000/testtest/> kann man das Farbschema und andere Style-Elemente (bislang noch nicht allzu viele ;) ) betrachten. Als Konzept angedacht war die Seite als Single Page zu belassen, und alle Infos für Besucher direkt auf der Startseite unterzubringen.


## Deploy

Im `_site` Ordner sind HTML und CSS die auf jedem Webspace laufen sollten.
