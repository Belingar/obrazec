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
  css/                      ← mapa za stile
  js/                       ← mapa za skripte
  img/                      ← mapa za slike/ikonice


obrazec.html — stran z obrazcem, razdeljen je na več delov: Plačnik, Prejemnik, Podrobnosti plačila. Vsebuje polja: račun, naziv, IBAN, naslov, država, znesek, datum, model, referenca, namen, …

HTML5 za strukturo strani.

Prisotna tudi JavaScript za dinamično vedenje.

Opis glavnih funkcionalnosti

Obrazec za novo plačilo z razdelki:

Plačnik: izbira računa, stanje, dnevna omejitev, razpoložljivo …

Prejemnik: naziv, IBAN, naslov, država (SLO/ITA/FRA) …

Podrobnosti plačila: znesek, model, referenca, koda namena, namen, datum plačila, nadomestilo, nujno/periodično plačilo, pogostost …

Različni tipi plačil: domače, enostavno nakazilo, tuje plačilo …

Licence & avtorske pravice: Urh Belingar
