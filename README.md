<img src="http://assets.angular.schule/logo-angular-schulung-heidelberg-2019-03.png">

#### **mit Johannes Hoppe**

<hr>

**Herzlich Willkommen – und schön, dass Du dabei bist!**  
In diesem Repository findest Du während des Workshops den Quelltext unserer Beispielanwendung.

# ⏰ Agenda

Auf [dieser Seite](AGENDA.md) findest du den genauen Ablaufplan für unsere gemeinsamen 4 Tage sowie Informationen zur gastronomischen Verpflegung.

# 💬 Chat

Während des Workshops verwenden wir einen [Chat über den Dienst Gitter](https://gitter.im/angular-schule/2020-02-heidelberg).
Hier können wir Codeschnipsel, Links und andere Sachen teilen. Folge einfach diesem Link:

[<img src="https://badges.gitter.im/angular-schule/2020-02-heidelberg.svg" width="160">](https://gitter.im/angular-schule/2020-02-heidelberg)

Um die Nachrichten lesen zu können, musst du nicht angemeldet sein.
Sofern du einen Account bei Gitlab, GitHub oder Twitter hast, kannst du dich über einen der Dienste einloggen und an der Diskussion beteiligen. Eine Beteiligung am Chat ist freiwillig und es ist für den Kurs nicht notwendig, dass du dich aktiv an der Diskussion beteiligst.  


# ✅ Vorbereitung

Damit wir gleich durchstarten können, solltest Du ein paar Vorbereitungen treffen.  
Die gesamte Installation wird rund 30 Minuten dauern. 


## Benötigte Software

1. **Node.js 12** oder höher: [https://nodejs.org](https://nodejs.org)
   + Mac-Benutzer bitte Homebrew verwenden! ([siehe Anleitung](https://presentations.angular.schule/HOMEBREW_NODE))
2. **Google Chrome:** [https://www.google.com/chrome/](https://www.google.com/chrome/)
   + **[Angular Augury](https://chrome.google.com/webstore/detail/augury/elgalmkoelokbchhkhacckoklkejnhcd)** (Chrome Extension)
   + **[Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)** (Chrome Extension)
4. **Visual Studio Code:** [https://code.visualstudio.com](https://code.visualstudio.com)
   + [Angular-Schule: Extension Pack](https://marketplace.visualstudio.com/items?itemName=angular-schule.angular-schule-extension-pack)  (Visual Studio Code Extension)
5. optional: **Git** (und ggf. ein grafischer Client wie SourceTree oder GitExtensions)


## Proxy?

Solltest du einen Firmenlaptop verwenden, so hast du womöglich bereits einen Proxy eingestellt. (siehe z. B. [diese Anleitung](https://presentations.angular.schule/PROXY.html))
Im Workshop-WLAN gibt es keinen Proxy.
Du kommst direkt ins Internet.
Bitte entferne deine Proxy-Einstellungen rechtzeitig vor der Schulung.
Am besten führst du diese Anleitung auch gleich über ein offenes WLAN durch.


## Pakete installieren

Die Angular CLI ist das offizielle Build-Tool für Angular. Mit folgendem Befehl kannst Du die CLI installieren:

```
npm install -g @angular/cli@next
```

⚠️ Überprüfe bitte anschließend die Versionen, damit wir beim Workshop alle auf dem gleichen Stand sind.
```
node -v
> Erwartet: v12.x oder höher

npm -v
> Erwartet: 6.x oder höher

ng version
> Erwartet: 9.0.0-rc.12 oder höher
```



## Startprojekt erzeugen

Bitte lege das Übungsprojekt schon vor Beginn des Workshops an.
Die Angular CLI nimmt uns die meisten Schritte schon ab.
Was die Parameter im Einzelnen bedeuten, besprechen wir natürlich im Workshop!

Führe in Deinem Arbeitsverzeichnis die folgenden Befehle aus:

```
ng new book-rating --routing --style=scss --prefix=br
cd book-rating
ng serve
```

Die Installation kann bei langsamer Internetverbindung sehr lange dauern.
Warte beim Schritt `Installing packages for tooling via npm.` mit Geduld ab!


> Auf http://localhost:4200 sollte nun eine Website mit dem Text "book-rating app is running!" erscheinen!
Wenn bei allen Teilnehmern das Grundgerüst steht, können wir ohne Zeitverlust loslegen.

![Screenshot CLI](https://assets.angular.schule/chrome_cli_welcome_new.png)



## Test-Umgebung prüfen

Beende den laufenden Webserver mit der Tastenkombination `Strg + C`.  
Prüfe bitte zum Abschluss, ob folgender Befehl ohne Fehlermeldungen ausführt:

```
ng test
```

Fertig!


## Probleme?

Sollte es zu einer Fehlermeldung kommen, dann sende uns den Fehlertext und einen Screenshot einfach per Mail an [team@angular.schule](mailto:team@angular.schule).  
Wir werden schnell eine Lösung finden.



### Wir freuen uns schon! 🙂

Bei Fragen wende dich einfach direkt an das Angular-Schule-Team:  
[team@angular.schule](mailto:team@angular.schule)

<hr>

<img src="http://assets.angular.schule/logo-angular-schule.png" height="60">

### &copy; 2020 https://angular.schule | Stand: 04.02.2020
