

Termelés és teljesítmény követő alkalmazás a FESTO AM operátorok részére. 

#react #graphQl

Demo: https://master.d3hs7s1k95s0pr.amplifyapp.com/

## A probléma

Az operátorok a gyártás mellett papír alapon kell vezessék az elkészített termékeiket, és táblán vezetniük az óránkénti teljesítményt. 1 órán belül több különböző típusú terméket készít az operátor amelyekhez külön teljesítmény értékek (normál értékek) tartoznak.

mivel a mennyiségek 100-as nagyságrendűek, és fejben kell összeadják, minden órában több percet vesz el az alkalmazottól, és a hibázás lehetősége is magas
A műszakvégi záráskor papír alapon el kell könyvelniük miből mennyit gyártottak, amely nagyságrendileg 700-800 tételt takar, és szintén értékes perceket rabol el.


## Megoldás

Mobil eszköz, amelyen:

* pár mozdulattal rögzítik az elkészített terméket
* kiszámolja helyettük az adott munkaóra normál értéket, az elkészített mennyiséget
* Rögzíti az adott óra teljesítményét
* Műszakvégén összegzőt generál 


### Tényezők

* az alkalmazott a saját mobilját fogja használni, aminek a teljesítménye ismeretlen. Kis erőforrású, akár telepítést nélkülöző alkalmazás kell

* nem tudjuk van-e állandó internet elérése. Offline is működjön

* Azt érezzék hogy az alkalmazás értük van, nem ellenük. Kerüljük a monitorozást éreztető kivitelezést. Kapjanak teljes uralmat az adataik felett.


