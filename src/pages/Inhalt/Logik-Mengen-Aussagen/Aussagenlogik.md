---
layout: '../../../layouts/LessonLayout.astro'
chapter: 'Die Sprache der Mathematik: Aussagenlogik, Mengen, Abbildungen'
lesson: 'Aussagenlogik'
type: 'Lecture'
num: 1
chapterNum: 2
---

# Die Sprache der Mathematik: Aussagenlogik, Mengen, Abbildungen

## Aussagenlogik

Mathematik kann man als eine Sprache auffassen. Das Vokabular basiert auf der Mengenlehre, und die Aussagenlogik übernimmt die Rolle der Grammatik. Die Begriffe und Symbole der Mengenlehre und Logik werden als Art Stenografie verwendet, um Definitionen, Sätze und Beweise prägnant und klar zu formulieren.

> [!NOTE]
> Eine Aussage ist eine Aussage, der eindeutig und genau einem der Wahrheitswerte wahr oder falsch zugeordnet werden kann. Wir nennen Aussagen äquivalent, wenn sie denselben Wahrheitswert haben.

Beispiele:
-	Jede gerade Zahl ist die Summe von zwei ungeraden Zahlen (wahre Aussage)
-	Die Zahl 7 ist eine Primzahl (wahre Aussage)
-	Die Zahl 10 ist eine Primzahl (falsche Aussage)
-	Berlin ist eine schöne Stadt (keine Aussage)

### Aussagen lassen sich mittels Junktoren verbinden

Meist ist man nicht nur an einzelnen Aussagen interessiert, sondern will diese verknüpfen. Dies geschieht mit Bindewörtern wie nicht, und, oder oder. In der formalen Logik nennt man diese Bindewörter Junktoren. Im Folgenden werden Aussagen mit Großbuchstaben, etwa A, B, C bezeichnet.

> [!NOTE]
> Seien A und B Aussagen. Dann sind:
> ¬A (gelesen „nicht A“),
> A∧B (gelesen „A und B“),
> A∨B (gelesen „A oder B“),
> A⇒B (gelesen „A impliziert B“),
> A⇔B (gelesen „A ist äquivalent zu B“),
> ebenfalls Aussagen. Die Wahrheitswerte dieser neuen Aussagen werden durch Wahrheitstabellen definiert.
> 
> ![grafik](https://github.com/user-attachments/assets/45366d12-8df5-4e29-a050-e492919575d6)

Der folgende Satz fasst die wichtigsten Rechenregeln der Aussagenlogik zusammen.

> [!TIP]
> Seien A, B, C Aussagen. Dann gilt:
> A⇔¬(¬A)
> De-morgan 1: ¬(A∧B)⇔(¬A)∨(¬B)
> De-morgan 2: ¬(A∨B)⇔(¬A)∧(¬B)
> Kontraposition: A⇒B⇔(¬B)⇒(¬A)
> A ⇔B ⇔ (A ⇒ B)∧ (B ⇒ A)
> A ⇒ B⇔ ¬A ∨B

Die obigen Regeln werden ständig in mathematischen Beweisen verwendet. Zum Beispiel besagt Teil e, dass man die Gültigkeit der Äquivalenz A ⇔B beweisen kann, indem man die beiden Implikationen A ⇒ B und B ⇒ A beweist. Wie in der Einführung beschrieben, müssen Sätze bewiesen werden.  Dies geschieht in diesem Fall mithilfe von Wahrheitstabellen. Wir beweisen die Aussagen b und d.

![grafik](https://github.com/user-attachments/assets/c47ac18a-8dea-4308-ab7a-36d305f11315)

### Quantoren erlauben knappes Hinschreiben von Existenz- und Allaussagen

Häufig hat man es mit logischen Aussagen zu tun, die nicht einfach wahr oder falsch sind, sondern die gewisse Variablen enthalten. Eine solche Aussage kann nur dann als wahr oder falsch beurteilt werden, wenn etwas für die Variable eingesetzt wird. 

Beispiel: Wäre die Aussage „x ist größer 0“, dann kann die Wahrheit nur entschieden werden, wenn für x etwas eingesetzt wird. Durch sogenannte Quantoren kann eine solche Aussage umformuliert werden, die dann für sich selbst wahr oder falsch ist.
Für uns gibt es nur zwei Quantoren:

- Existenzquantor ∃: „∃x: A(x)“ ist gleichbedeutend mit „Es existiert ein x, für das A(x) wahr ist“.
- Allquantor ∀: „∀x: A(x)“ ist gleichbedeutend mit „Für alle x ist A(x) wahr“
Wobei A(x) eine Aussagenform bezeichnet.

Existenz- und Allaussagen lassen sich natürlich auch negieren, dabei ändert sich ihr Charakter von Grund auf. Sagen wir, eine Aussage A trifft nicht auf alle x zu, so muss es zumindest ein x geben, für das A nicht gilt. Umgekehrt verneinen wir, dass es ein x gibt, für das A gilt, so muss A für alle x falsch sein. Kurz, die Verneinung einer Allaussage ist eine Existenzaus sage, die Verneinung einer Existenzaussage ist eine Allaussage. 
In formaler Notation sieht das wie folgt aus:

¬ (∀x ∈ M : A(x)) ⇔ ∃x ∈M∶¬A(x)
¬ (∃x ∈ M : A(x)) ⇔∀x ∈M∶¬A(x)

Also bei einer Verneinung tauscht man den Quantor und verneint die Aussage. 

