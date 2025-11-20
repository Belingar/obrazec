README
Pregled

Ta repozitorij vsebuje dve glavni spletni strani:

Glavna stran: „Obrazec“ (pot: /obrazec/)

Podstran za vnos plačila: (pot: /obrazec/obrazec.html)

Cilj je prikazati preprost obrazec za plačilo z večjezično podporo (SLO / EN) in različnih tipov plačil (domace, enostavno, tujina).

Struktura datotek
/obrazec/
  index.html                ← glavna stran
  obrazec.html              ← stran z obrazcem za plačilo
  css/                      ← mapa (če obstaja) za stile
  js/                       ← mapa (če obstaja) za skripte
  img/                      ← mapa za slike/ikonice


index.html (ali v tvojem primeru https://belingar.github.io/obrazec/) — uvodna stran, omogoča izbiro jezika (SLO / EN) in prehod na obrazec.

obrazec.html — stran z obrazcem, razdeljen je na več delov: Plačnik, Prejemnik, Podrobnosti plačila. Vsebuje polja: račun, naziv, IBAN, naslov, država, znesek, datum, model, referenca, namen, …

Tehnologije in zgradba

HTML5 za strukturo strani.

Verjetno CSS za stile (če so vključene).

Možno, da je prisotna tudi JavaScript za dinamično vedenje (npr. aktiviranje izbire države, skeniranje QR‑koda) — v ‘obrazec.html’ je videti opcija „UVOZI QR“.

Večjezična izbira (SLO / EN) – lahko je realizirana ali preko ločenih strani ali z JavaScriptom, čeprav iz same strani ni jasno, ali je angleška različica že pripravljena.

Navigacijski elementi (meni) na obrazec strani: Domov → Plačila → Novo plačilo …

Opis glavnih funkcionalnosti

Izbira jezika: SLO / EN

Obrazec za novo plačilo z razdelki:

Plačnik: izbira računa, stanje, dnevna omejitev, razpoložljivo …

Prejemnik: naziv, IBAN, naslov, država (SLO/ITA/FRA) …

Podrobnosti plačila: znesek, model, referenca, koda namena, namen, datum plačila, nadomestilo, nujno/periodično plačilo, pogostost …

Možnost „UVOZI QR“ (verjetno za izpolnitev podatkov preko QR‑kode)

Različni tipi plačil: domače, enostavno nakazilo, tuje plačilo …

Namen in uporaba

Ta spletna stran je najverjetneje prototip ali demo za obrazec spletnega bančništva (imenovan “Bank@Net”). Namenjen je, da pokaže kako bi izgledal vmesnik za uporabnika, ki želi izvesti plačilo.

Uporaba:

Uporabnik izbere jezik.

Preveri/izbere svoj račun (Plačnik).

Vpiše podatke prejemnika.

Izpolni podrobnosti plačila.

Odda obrazec (gumb „Shrani kot vzorec / Naprej“) — če je implementirano.

Licence & avtorske pravice: Urh Belingar
