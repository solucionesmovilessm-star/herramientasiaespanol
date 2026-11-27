---
title: "Mineros en solitario en 2026: sí ha habido premios, también con un Bitaxe; es una lotería, no un sueldo"
date: 2026-11-27
summary: "En 2026 varios mineros en solitario se han llevado la recompensa completa de un bloque de Bitcoin (3,125 BTC más comisiones). El 10 de julio, un Bitaxe de unos 1 TH/s encontró el bloque 957.382. Las probabilidades para un aparato así siguen siendo minúsculas: es una lotería, no un ingreso previsible."
sources:
  - https://mempool.space/block/957382
  - https://mempool.space/block/977057
  - https://mempool.space/block/943466
  - https://mempool.space/block/944078
  - https://mempool.space/block/973262
  - https://mempool.space/mining/pool/solock
  - https://mempool.space/mining/pool/publicpool
  - https://www.coindesk.com/markets/2026/07/14/solo-btc-miner-makes-usd200-000-using-usd150-equipment
  - https://www.theblock.co/news/ecosystems/2026-11-23-solo-bitcoin-miner-beats-odds-wins-191000-block-reward-444919
  - https://bitcoinmagazine.com/news/solo-bitcoin-miner-191000-block-reward
  - https://decrypt.co/383818/solo-bitcoin-miner-scores-again-191000-jackpot
  - https://noderunners.network/en/pool
  - https://news.bitcoin.com/mining/solo-bitcoin-miners-strike-digital-gold-as-2026-jackpot-wins-reach-36-blocks/
  - https://cointelegraph.com/news/solo-bitcoin-miner-wins-block-using-tiny-cheap-bitcoin-miner
  - https://bitaxe.de/en/bitaxe-block-odds
---

## Qué ha pasado

En 2026 sí ha habido mineros en solitario que se han llevado un bloque entero de Bitcoin: la subvención de **3,125 BTC** más las comisiones de las transacciones. Entre ellos hay casos documentados con hardware de escritorio, incluido un **Bitaxe** de alrededor de 1 TH/s. Eso no significa que «los mineros en solitario estén ganando dinero este año». La inmensa mayoría no encuentra nada. Encontrar un bloque con un aparato pequeño es una **lotería**, no un sueldo.

Un bloque en solitario, en sentido estricto, es aquel en el que el que da con la prueba válida se queda con toda la recompensa (menos, si acaso, la comisión del servicio que usa). No es lo mismo que minar en un *pool* convencional, donde el premio se reparte entre todos los participantes.

## Casos verificados en 2026

La cadena de Bitcoin registra la fecha, la altura del bloque, la recompensa y la etiqueta del servicio. **No registra el modelo del minero**. El hashrate y el aparato los publica, cuando lo hace, el operador del *pool* o el propio ganador. En esta lista solo entra lo que hemos podido contrastar; si el dispositivo no está bien documentado, lo decimos.

- **10 de julio. Bloque [957.382](https://mempool.space/block/957382).** Servicio: [Public Pool](https://mempool.space/mining/pool/publicpool). Recompensa en la cadena: **3,13823506 BTC** (3,125 de subvención más 0,0132 en comisiones), pagados íntegros a una sola dirección. [CoinDesk](https://www.coindesk.com/markets/2026/07/14/solo-btc-miner-makes-usd200-000-using-usd150-equipment) informó, citando datos de Public Pool, de que el minero usaba un **Bitaxe** con unos **995 GH/s** (cerca de 1 TH/s) y que llevaba unas ocho horas en marcha. Entonces la recompensa equivalía a unos 200.000 dólares. Es el caso mejor documentado de 2026 con un solo Bitaxe.

- **3 de abril. Bloque [943.466](https://mempool.space/block/943466).** Servicio: Public Pool. Recompensa: **3,14767454 BTC** a una sola dirección. Fue el primer bloque de ese servicio, según el explorador. El modelo no está en la cadena; tiendas y medios de la comunidad lo atribuyeron a un **NerdOctaxe** de unos 9,6 TH/s (ocho chips de la familia Bitaxe en una placa). Tratamos esa atribución como un reporte, no como un dato on-chain.

- **7 de abril. Bloque [944.078](https://mempool.space/block/944078).** Servicio: [Noderunners](https://noderunners.network/en/pool). Recompensa: **3,13206403 BTC**. El operador del *pool* anunció que el bloque lo había encontrado un único **NerdQaxe++**, con un hashrate de alrededor de **5 TH/s** (el panel del *worker* que se ha difundido sitúa la media de un día en 4,82 TH/s).

- **26 de octubre. Bloque [973.262](https://mempool.space/block/973262).** Recompensa: **3,15418892 BTC** a una sola dirección. La transacción *coinbase* lleva la etiqueta de un **FutureBit Apollo** en solitario. [Bitcoin Magazine](https://bitcoinmagazine.com/news/solo-bitcoin-miner-191000-block-reward) lo citó después como un minero casero. El hashrate concreto no lo hemos visto publicado por una fuente primaria.

- **22 de noviembre. Bloque [977.057](https://mempool.space/block/977057).** Servicio: [Solo CK](https://mempool.space/mining/pool/solock) (solo.ckpool.org). Recompensa total: **3,12871270 BTC** (3,125 más unos 0,0037 en comisiones). El servicio se queda un 2 %: 3,06613845 BTC fueron a la dirección del minero y 0,06257425 BTC al *pool*. Según [The Block](https://www.theblock.co/news/ecosystems/2026-11-23-solo-bitcoin-miner-beats-odds-wins-191000-block-reward-444919), [Bitcoin Magazine](https://bitcoinmagazine.com/news/solo-bitcoin-miner-191000-block-reward) y [Decrypt](https://decrypt.co/383818/solo-bitcoin-miner-scores-again-191000-jackpot), Con Kolivas, operador de CKPool, escribió que el minero tenía unos **11,1 TH/s** (en un *worker* de 3,47 TH) y «una probabilidad de 1 entre 1.650 de resolver un bloque en un año». El modelo del equipo no se publicó: 11,1 TH/s equivale a unos cuantos mineros de escritorio juntos, no a un Bitaxe suelto. En el momento, la recompensa bruta rondaba los 191.000 dólares (unos 186.000 para el minero, tras la comisión).

No todos los bloques «en solitario» de 2026 salieron de un aparatito en el escritorio. El 7 de noviembre, el bloque [974.893](https://mempool.space/block/974893), también en Solo CK, lo encontró un minero con unos **581 TH/s**, según recogió [Bitcoin.com News](https://news.bitcoin.com/mining/solo-bitcoin-miners-strike-digital-gold-as-2026-jackpot-wins-reach-36-blocks/) citando a Kolivas: una probabilidad de 1 entre 35 en un año. El 31 de mayo, el bloque [951.771](https://mempool.space/block/951771) en Braiins Solo lo encontró, según CoinDesk, un conjunto de 14 Canaan Nano con **157 TH/s** en total. Hay listados que hablan de «36 premios» en 2026; esa cifra mezcla tamaños muy distintos, e incluye operaciones de cientos de petahashes. No es una racha de Bitaxe.

Lo que sí está en [mempool.space](https://mempool.space/mining/pool/solock), a 26 de noviembre de 2026: **12** bloques etiquetados como Solo CK, **6** como Public Pool, **6** como Braiins Solo y **1** como Noderunners. Son 25 bloques en servicios de solitario, más al menos el Apollo autoalojado. Siguen apareciendo: Public Pool etiquetó el [977.488](https://mempool.space/block/977488) el 25 de noviembre (3,1783 BTC; dispositivo no publicado) y Braiins Solo el [977.712](https://mempool.space/block/977712) el 26 de noviembre.

En 2025 ya hubo precedentes con hardware pequeño. El 10 de marzo, el bloque [887.212](https://mempool.space/block/887212) en solo.ckpool.org pagó 3,1502 BTC, y [Cointelegraph](https://cointelegraph.com/news/solo-bitcoin-miner-wins-block-using-tiny-cheap-bitcoin-miner) recogió que Kolivas lo atribuyó a un Bitaxe Ultra de unos 480 GH/s.

## Lo que no cuenta como un premio en solitario

Hay anuncios de tiendas y de usuarios que conviene leer con calma:

- Si el minero apunta a un *pool* de recompensa compartida (por ejemplo, Braiins FPPS), puede haber «ayudado» a encontrar un bloque y **no llevarse los 3,125 BTC**. En noviembre, una tienda anunció que un NerdQaxe++ había «encontrado» el bloque 974.238; Bitcoin.com News señaló que no entra en los recuentos de solitario precisamente por eso.
- En **Parasite Pool**, el reparto histórico no entrega el bloque entero a quien lo encuentra: suele reservar 1 BTC para el hallador y distribuir el resto. El bloque 945.601, del 18 de abril, encaja con ese esquema en la *coinbase* (1 BTC + 2,1268 BTC). No lo contamos como premio íntegro.
- Un **NerdMiner** (placa ESP32 que hashea ella misma, en el rango de los kilohashes) no es un **Nerdaxe** ni un Bitaxe, que llevan un ASIC. El primero no tiene una probabilidad realista de encontrar un bloque.

## Las probabilidades de un Bitaxe

Bitcoin ajusta la dificultad para que, en conjunto, salga un bloque cada diez minutos. Tu probabilidad es simplemente tu hashrate dividido por el de toda la red.

Según la API de mempool.space, el 27 de noviembre de 2026 la dificultad ronda los **145 billones** y el hashrate de la red, unos **1,04 ZH/s** (unos 1.039 EH/s). Con esos datos, un minero de **1 TH/s** (un Bitaxe Gamma en cifras redondas) tiene de media:

- una probabilidad de **1 entre unos 1.040 millones** de llevarse un bloque concreto;
- una probabilidad de **1 entre unos 19.700** de encontrar un bloque en un año;
- un tiempo medio esperado de **unos 19.700 años**.

Ese «tiempo medio» no es una cola: cada hash es un intento nuevo. Puede tocar mañana o no tocar nunca. [Bitaxe.de](https://bitaxe.de/en/bitaxe-block-odds), con datos de septiembre de 2026 (dificultad más baja, 132,76 billones), calculaba 1 entre 16.900 al año para un Gamma de 1,07 TH/s. El orden de magnitud no cambia.

Un NerdQaxe++ de unos 4,8 TH/s mejora la cuenta en la misma proporción: alrededor de 1 entre 4.100 al año con la dificultad actual. Un equipo de 11,1 TH/s, como el del 22 de noviembre, se queda en torno a 1 entre 1.800. Sigue siendo una lotería.

## Qué consume de electricidad

Un Bitaxe Gamma típico gasta unos **15-21 vatios**. Si funciona las 24 horas, en un año consume unos **130-184 kWh**. En un hogar europeo eso suele costar **entre 20 y 55 euros**, según la tarifa. El valor esperado de la lotería, a la dificultad de hoy, queda por debajo de esa factura: la probabilidad de 1 entre ~19.700 aplicada a una recompensa de unos 3,13 BTC no cubre la luz de un año. Bitaxe.de llegaba a la misma conclusión en septiembre: lo presentaba como herramienta para aprender y como boleto permanente, no como inversión.

Si no encuentras bloque, no hay ingreso. Solo el gasto de la luz (y del aparato).

## Enlace de afiliado

Si te interesa el hardware de esta familia (Bitaxe, Nerdaxe y similares), puedes verlo en Bitaxe.de, un minorista europeo. **Enlace de afiliado:** si compras a través de él, la web recibe una comisión sin coste extra para ti:

<a href="https://bitaxe.de/?ref=gonzalogermanaimar" rel="sponsored nofollow">https://bitaxe.de/?ref=gonzalogermanaimar</a>

Minar Bitcoin **no garantiza ningún beneficio**. Esta noticia no es un consejo financiero ni de inversión. El valor en dólares o en euros de una recompensa cambia con el precio de bitcoin, y un premio pasado no dice nada sobre el siguiente intento.
