# *Kaskadowe* Arkusze Stylów - w pigułce

<dl>
<dt>Kaskadowość<dt><dd>to zasady, któe określają w jaki sposób przeglądarka wybiera właściwość CSS dla danego dokumentu</dd>
<dl>

## Brak zadeklarowanych właściwości
Właściwości są inicjaizowane jeśli arkusz stylów nie zawiera danej właściwości (czy to w precyzyjnej regule czy przez dziedziczenie)

np. 

```margin: 0;```

```font-size: medium;```

 ## Dziedziczenie

 _Część_ właścwiości jest dziedziczona. 
Potomkowie będą dziedziczyć o ile nie mają _precyzyjnych_ reguł określających daną właściwość. 

Przy dziedziczeniu *ważność nie ma znaczenia*. Decyduje element, który jest bliżej ostatecznego elementu.

### *Precyzja* nadpisuje dziedziczenie
Jeśli selektor jest precyzyjny, tp jego właściwości zawsze nadpisują właściwości odziedziczone. 

Gdy kilka reguł - precyzyjnych - pasuje, to decyduje najpierw ważność, a potem kolejność.

## Klasyfikacja medalowa. 
* medal brązowy - znaczniki i pseudolementy
* medal srebrny - klasy i pseudoklasy
* medal złoty - identyfikator

\* (gwiazdka) - nie jest liczona wcale. 

##  _*!! ciekawostka !!*_
Tu też decyduje kolejność: 

```<link rel="stylesheet" href="style.css">```
```<style></style>```