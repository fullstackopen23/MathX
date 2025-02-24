---
layout: '../../../layouts/LessonLayout.astro'
chapter: 'Die Sprache der Mathematik: Aussagenlogik, Mengen, Abbildungen'
lesson: 'Aussagenlogik'
type: 'Lecture'
num: 1
chapterNum: 2
---

## Aussagen

Mathematik kann man als eine Sprache auffassen. Das Vokabular basiert auf der Mengenlehre, und die Aussagenlogik übernimmt die Rolle der Grammatik. Die Begriffe und Symbole der Mengenlehre und Logik werden verwendet, um Definitionen, Sätze und Beweise prägnant und klar zu formulieren.

Wie im Einführungskapitel beschrieben, starten wir ein Kapitel wie üblich mit einer Definition.

> [!NOTE] > **Definition 1.1**  
> Eine (mathematische) Aussage ist eine Behauptung, von der eindeutig feststeht, ob sie wahr oder falsch ist

Beispiele:

1. „Jede gerade Zahl ist die Summe von zwei ungeraden Zahlen“ (Dies ist eine wahre Aussage)
2. „Die Zahl 7 ist eine Primzahl“ (Dies ist eine wahre Aussage)
3. „Die Zahl 10 ist eine Primzahl“ (Dies ist auch eine Aussage, auch wenn sie falsch ist)
4. „Paris ist eine schöne Stadt“ (Dies ist keine Aussage)

## Aussagen lassen sich mittels Junktoren verbinden

Meist ist man nicht nur an einzelnen Aussagen interessiert, sondern will diese verknüpfen. Das geschieht mit Bindewörtern wie _nicht_, _und_, oder _oder_. Man nennt diese Bindewörter **Junktoren**.

> [!NOTE] > **Definition 1.2**  
> Seien A und B Aussagen. Dann sind:
>
> - ¬A (gelesen „nicht A“),
> - A∧B (gelesen „A und B“),
> - A∨B (gelesen „A oder B“),
> - A⇒B (gelesen „A impliziert B“),
> - A⇔B (gelesen „A ist äquivalent zu B“),
>
> ebenfalls Aussagen. Die Wahrheitswerte dieser neuen Aussagen werden durch folgende Wahrheitstabelle definiert.
>
> ![grafik](https://github.com/user-attachments/assets/45366d12-8df5-4e29-a050-e492919575d6)

Der folgende Satz fasst die wichtigsten Rechenregeln der Aussagenlogik zusammen.

> [!TIP] > **Satz 1.3**  
> Seien A, B, C Aussagen. Dann gilt:
>
> a) A⇔¬(¬A)  
> b) De-morgan 1: ¬(A∧B) ⇔ (¬A)∨(¬B)  
> c) De-morgan 2: ¬(A∨B) ⇔ (¬A)∧(¬B)  
> d) Kontraposition: A⇒B ⇔ (¬B)⇒(¬A)  
> e) A ⇔ B ⇔ (A ⇒ B) ∧ (B ⇒ A)  
> f) A ⇒ B ⇔ ¬A ∨ B

Die obigen Regeln werden ständig in mathematischen Beweisen verwendet. Zum Beispiel besagt Teil e, dass man die Gültigkeit der Äquivalenz A ⇔ B beweisen kann, indem man die beiden Implikationen A ⇒ B und B ⇒ A beweist. Wie in der Einführung beschrieben, müssen Sätze bewiesen werden. Dies geschieht in diesem Fall mithilfe von Wahrheitstabellen. Wir beweisen die Aussagen b und d.

![grafik](https://github.com/user-attachments/assets/c47ac18a-8dea-4308-ab7a-36d305f11315)

## Quantoren erlauben knappes Hinschreiben von Existenz- und Allaussagen

Häufig hat man es mit logischen Aussagen zu tun, die nicht einfach wahr oder falsch sind, sondern die gewisse Variablen enthalten. Eine solche Aussage kann nur dann als wahr oder falsch beurteilt werden, wenn etwas für die Variable eingesetzt wird.

Beispiel:  
Wäre die Aussage „x ist größer 0“, dann kann die Wahrheit nur entschieden werden, wenn für x etwas eingesetzt wird. Durch sogenannte **Quantoren** kann eine solche Aussage umformuliert werden, die dann für sich selbst wahr oder falsch ist.

Für uns gibt es nur zwei Quantoren:

- Existenzquantor ∃: „∃x: A(x)“ ist gleichbedeutend mit „Es existiert ein x, für das A(x) wahr ist“.
- Allquantor ∀: „∀x: A(x)“ ist gleichbedeutend mit „Für alle x ist A(x) wahr“

(wobei A(x) eine Aussagenform bezeichnet.)

Existenz- und Allaussagen lassen sich auch negieren, dabei ändert sich ihr Charakter von Grund auf. Die Verneinung einer Allaussage ist eine Existenzaussage, die Verneinung einer Existenzaussage ist eine Allaussage.

Kurz, die Verneinung einer Allaussage ist eine Existenzaussage, die Verneinung einer Existenzaussage ist eine Allaussage.

In formaler Notation sieht das wie folgt aus:

- ¬ (∀x ∈ M : A(x)) ⇔ ∃x ∈M∶¬A(x)
- ¬ (∃x ∈ M : A(x)) ⇔∀x ∈M∶¬A(x)

Bei einer Verneinung tauscht man also den Quantor und verneint die Aussage.

Beachte: Um eine Existenzaussage zu zeigen, genügt es ein konkretes Beispiel anzugeben, bei dem die betreffende Aussageform zur wahren Aussage wird. Genauso ist es ausreichend, ein Gegenbeispiel anzugeben, um eine Allaussage zu widerlegen
