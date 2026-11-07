---
title: "Multifirma cripto y nodo Bitcoin: Safe 2 de 3 en redes EVM (guía 2026)"
description: "Qué protege un Safe 2 de 3 en Ethereum y otras redes EVM, qué no, cómo se separa de la multifirma de Bitcoin y cómo montar un nodo propio. No es consejo de inversión."
lang: es
updated: 2026-11-07
destacado: false
patrocinado: false
tags:
  - seguridad
  - cripto
  - privacidad
faq:
  - q: "¿Safe es lo mismo que SafePal?"
    a: "No. Safe es una cuenta de contrato inteligente en Ethereum y otras redes EVM. SafePal es una marca de cartera. Esta guía no comprobó un modelo físico de SafePal dentro de Safe."
  - q: "¿Qué protege un Safe 2 de 3?"
    a: "Los activos que están dentro del Safe. En una configuración básica, una sola clave robada no alcanza para una transacción ordinaria. No protege lo que sigue en las carteras firmantes, ni un permiso de gasto ya concedido, ni un módulo que hayas habilitado."
  - q: "¿Ledger, SafePal o Tangem sirven como firmantes?"
    a: "No está comprobado en esta página. Safe nombra a Ledger como familia de carteras hardware; el recorrido depende del modelo, la red y el firmware. La app de Tangem, sola, no es un firmante hardware: hace falta la tarjeta. La documentación de SafePal muestra un proveedor Ethereum genérico, no una certificación con Safe."
  - q: "¿Desconectar la página revoca un permiso de gasto?"
    a: "No. Un permiso ERC-20 concedido desde el Safe sigue hasta que lo revoques con otra transacción. Cerrar la sesión de la aplicación no lo borra."
  - q: "¿Qué pasa si pierdo un firmante?"
    a: "Perder el aparato no es lo mismo que perder la clave. Si recuperás la semilla por el método oficial del fabricante, ese firmante puede volver. Si se pierde uno para siempre, los otros dos pueden operar y sustituirlo. Si se pierden dos, el Safe queda bloqueado salvo una recuperación que ya estuviera configurada. No hay una semilla central de Safe."
  - q: "¿Este Safe sirve en Bitcoin o en Solana?"
    a: "No. Acá Safe es Ethereum y redes EVM admitidas, por ejemplo Base o Arbitrum. La multifirma de Bitcoin es otra herramienta. No des por hecho la misma dirección, ya desplegada y con la misma configuración, en todas las redes."
  - q: "¿Necesito un nodo para la multifirma?"
    a: "No. En Bitcoin, un nodo propio suma privacidad y verificación. No guarda las claves ni protege un Safe."
---

Si guardás cripto con una sola clave, quien la robe o quien la pierda controla esos fondos. Una **multifirma** pide varias firmas. Esta página explica dos sistemas distintos: un **Safe 2 de 3**, que es una cuenta de contrato en Ethereum y otras redes EVM, y la **multifirma nativa de Bitcoin**, más un nodo propio.

> **Aviso:** esto es divulgación sobre custodia. No es asesoramiento financiero ni de inversión, y no dice qué comprar. Para escribirla no conectamos ninguna cartera, no firmamos transacciones y no movimos fondos. No hay un video de esta guía. Si una pantalla te pide la semilla, cerrá esa pantalla: Safe no la necesita.

La versión anterior de esta página estaba fechada el 31 de octubre de 2026. Esta revisión es del 7 de noviembre de 2026.

## Dos sistemas distintos

No son la misma caja con otro nombre.

- **Safe** es una cuenta de contrato inteligente (*smart account*). La regla de firmas vive en ese contrato, en una red EVM. No es [SafePal](https://devdocs.safepal.com/Connect-wallet/Web/ethereum.html). SafePal es una cartera. Comparten letras; no comparten el producto.
- **Bitcoin** trae la multifirma en el propio protocolo. No usa el contrato de Safe. La herramienta de esta guía, para esa parte, sigue siendo [Sparrow Wallet](https://sparrowwallet.com).
- **Solana** tampoco entra en este Safe. No prometas «la misma multifirma» en Bitcoin o en Solana.

El nodo de Bitcoin está al final, en su propia sección. No custodia el Safe ni firma por vos.

## Palabras que vas a ver

- **Propietario o firmante:** una dirección con permiso para confirmar. En la documentación de Safe se llaman *owners*.
- **Umbral:** cuántas de esas confirmaciones hacen falta. En un 2 de 3, hacen falta dos de tres.
- **Semilla o frase de recuperación:** las palabras que reconstruyen una clave. Quien las tiene, tiene la clave. No se dictan, no se fotografían y no se pegan en una web.
- **Red:** la cadena donde vive la cuenta. Ethereum, Base y Arbitrum son redes distintas aunque las tres sean EVM.
- **Gas:** la comisión de la red por escribir algo en la cadena (desplegar, ejecutar o cambiar la configuración).
- **Firma fuera de cadena:** una confirmación guardada todavía fuera del bloque. No mueve fondos.
- **Ejecución:** la transacción que sí se envía a la red. Recién cuenta cuando el explorador de esa red la muestra confirmada.
- **Permiso ERC-20:** una autorización, dada desde el Safe, para que otra dirección gaste un token hasta un límite.
- **Módulo:** un contrato extra. Solo si lo habilitaste puede actuar con sus propias reglas, por fuera de la verificación ordinaria de firmas.

## Safe 2 de 3: qué protege y qué no

[Safe](https://safe.global) es la cuenta. [Safe{Wallet}](https://app.safe.global) es una interfaz para usarla. La regla no depende de una sola pantalla: en una transacción ordinaria, el contrato comprueba que firmaron suficientes propietarios. Lo explica la documentación de [conceptos de la cuenta](https://docs.safe.global/advanced/smart-account-concepts).

Un esquema habitual para una persona es **tres direcciones y umbral 2**. La propia ayuda de Safe lo presenta como un arreglo común, no como el único posible: [qué configuración usar](https://help.safe.global/articles/1038062742-what-safe-setup-should-i-use).

### Qué sí cubre

En una configuración básica (tres propietarios, umbral 2, sin módulos habilitados y sin un permiso de gasto ya abierto):

- Protege los activos **que están dentro del Safe**.
- Si roban **una** clave, eso normalmente **no alcanza** para una transacción ordinaria. Falta la segunda firma.
- Si se pierde **un** firmante y los otros dos siguen disponibles, esos dos alcanzan el umbral.

«Básica» importa. Las excepciones de abajo no son letra chica: cambian el resultado.

### Qué no cubre

- **Lo que sigue en las carteras firmantes.** Esas monedas obedecen a cada clave sola. El Safe no las envuelve.
- **A dos firmantes engañados.** Si dos confirman una operación mala, el umbral se cumple. El contrato no adivina la intención.
- **Un permiso ERC-20 ya concedido desde el Safe.** La dirección autorizada (*spender*) puede mover ese token dentro del límite sin pedir otra vez las dos firmas por cada gasto. Es el mecanismo del propio token, descrito en el [EIP-20](https://eips.ethereum.org/EIPS/eip-20). Desconectar la página, la aplicación o WalletConnect **no revoca** ese permiso. Hay que anularlo con otra transacción del Safe, y esa sí pide el umbral.
- **Eso no es un módulo.** Los [módulos](https://docs.safe.global/advanced/smart-account-modules) son otra pieza. Un Safe básico no los trae activados y no se saltan la verificación de firmas por defecto. **Solo si los habilitaste** pueden ejecutar según sus reglas, llamando a `execTransactionFromModule`. Safe avisa que un módulo malicioso puede vaciar la cuenta. Los «límites de gasto» de la interfaz (*spending limits*) usan un módulo de allowances: también hay que activarlos, y no son lo mismo que un `approve` de un token. El detalle está en la ayuda de [límites de gasto](https://help.safe.global/articles/3961440620-set-up-and-use-spending-limits).
- **Otra red, por el solo hecho de copiar la dirección.** Mirá la sección de redes, más abajo.
- **Una semilla maestra de Safe.** No existe. Si no llegás al umbral, el contrato no se abre con una frase central.

### Antes de cada firma

Cada firmante mira por su cuenta, en el dispositivo que firma, y no se fía solo del resumen de la página:

- la **red**;
- el **destinatario**;
- el **importe**;
- los **datos** de la operación;
- si la operación **cambia propietarios, umbral o módulos**. Eso no es un envío común: cambia las llaves de la caja.

Una firma juntada fuera de la cadena deja la orden **pendiente**. No es la ejecución ni la confirmación en el explorador.

### El caso Bybit, en corto

El 28 de febrero de 2025, la Safe Ecosystem Foundation publicó un [comunicado](https://safefoundation.org/blog/safe-ecosystem-foundation-statement). Reproduce el informe **preliminar** del equipo de Safe{Wallet} sobre el ataque a Bybit: lo atribuye a una máquina de un desarrollador comprometida y a una transacción maliciosa disfrazada. Dice que la revisión forense no encontró indicios de una falla en los contratos de Safe ni en el código del frontend y de los servicios. En esa fecha la investigación seguía abierta y el informe final estaba pendiente.

No es una auditoría cerrada. Tampoco es un fallo matemático del 2 de 3. Sirve para ver el otro riesgo: con las firmas suficientes, una operación disfrazada puede pasar si quienes firman no contrastan red, destino, importe y datos.

## Claves que de verdad son independientes

Tres direcciones no suman tres claves si salen de la misma semilla. Roban la frase y se llevan las tres.

Tres semillas guardadas en el mismo teléfono, el mismo ordenador o la misma nube comparten ese riesgo. No hace falta comprar tres aparatos. Una cartera de software puede ser un firmante. Lo que no conviene es vender como independencia total un esquema en el que las tres claves viven juntas.

Varias copias de la **misma** clave, aunque estén en tarjetas distintas, tampoco son una multifirma: cualquiera de esas copias puede firmar sola. Son un respaldo, no un 2 de 3.

Nunca escribas una semilla dentro de Safe, en un formulario o en un chat. Nunca importes al teléfono la semilla de una cartera hardware «para que sea compatible». Eso copia al teléfono la clave que querías dejar afuera. Si hace falta restaurar un aparato, usá solo el procedimiento oficial de ese fabricante, en un equipo que controles, y no se la pases a la web de Safe.

## Firmantes: un ejemplo, no un inventario probado

Este ejemplo es genérico. Sirve **si** cada pieza resulta compatible con la red que elijas. No es la lista de aparatos de nadie, y esta guía no recorrió esas pantallas.

- **Ledger.** La ayuda de Safe nombra carteras hardware como Ledger entre los firmantes posibles. El camino concreto depende del **modelo**, de la **red** y del **firmware**. Mirá la ayuda vigente de Safe y de Ledger antes de depender de un modelo. Acá no se conectó ninguno.
- **SafePal.** Su documentación para la web describe un proveedor Ethereum genérico, `window.safepalProvider`, para pedir una cuenta y sugerir firmas en sitios que hablen ese idioma: [Ethereum (EVM) en SafePal](https://devdocs.safepal.com/Connect-wallet/Web/ethereum.html). Eso no certifica que un modelo físico firme dentro de Safe. No lo probamos.
- **Tangem.** En modalidad hardware hace falta el dispositivo o la tarjeta. La aplicación instalada, sola, **no** es un firmante hardware. Esta página no comprobó Tangem con Safe y no muestra un paso a paso de esa app.

Safe también documenta su app móvil como firmante posible. Tampoco la probamos.

## Cómo se crea, sin copiar una pantalla

La ayuda oficial está en [crear un Safe en el navegador](https://help.safe.global/articles/7267202833-creating-a-safe-on-a-web-browser). Los botones cambian entre generaciones de la interfaz. Seguí la función, no una captura vieja. Entrá solo desde [safe.global](https://safe.global) o [app.safe.global](https://app.safe.global). No uses un anuncio ni un enlace reenviado.

1. **Conectá un firmante.** La web tiene que pedirte la conexión de la cartera, no la semilla.
2. **Configurá tres direcciones y el umbral 2.** Podés pegar una dirección o un nombre ENS. Revisá cada carácter. La cartera con la que entraste suele aparecer como primer propietario: cambiala si no es la que querés.
3. **Comprobá el resumen y la red.** Tres propietarios, umbral 2, la red que elegiste, y ningún módulo que no hayas pedido.
4. **Desplegá.** Anotá la dirección **y** la red. Hasta que el despliegue quede registrado en la cadena, la cuenta no está activa del mismo modo.
5. **Transferí una prueba pequeña** hacia el Safe, en esa misma red, y esperá a verla en el explorador.
6. **Sacá esa prueba con dos firmas.** Una sola la deja pendiente. La segunda permite ejecutar. Recién la confirmación del explorador cierra el ciclo.

Esta guía no hizo esos pasos con dinero ni con una red de prueba.

## Gas, relayers y «Pay later»

Desplegar, ejecutar y cambiar propietarios, umbral o módulos **puede costar gas**. Quién lo paga depende de la red y de las condiciones de ese momento. No afirmes que el último firmante paga siempre, ni que sea gratis en todas partes.

La [FAQ de comisiones](https://help.safe.global/articles/9993850744-safewallet-gas-fees-faq) describe un sistema, en despliegue progresivo, en el que el gas de ciertas transacciones sale del saldo del propio Safe, en Ethereum, Base, BNB Chain y Arbitrum, y solo con tokens que esa página enumera. Es un relayer del producto, no una gratuidad universal. En otras redes, o en el momento de desplegar, la ayuda de creación sigue hablando de tener el activo nativo para la comisión.

La opción **«Pay later»** de la creación inicial, según esa misma ayuda y según [qué configuración usar](https://help.safe.global/articles/1038062742-what-safe-setup-should-i-use), queda limitada a un Safe **1 de 1**. Al 7 de noviembre de 2026, la ayuda dice que un 2 de 3 no se crea por ese camino sin gas. Mientras siga en 1 de 1, **una sola clave manda**. Sumar firmantes y subir el umbral es otro cambio: también puede costar gas. No lo tomes como un 2 de 3 gratis para siempre. No deposites fondos de verdad mientras el umbral siga en 1.

Los ejemplos de transacción patrocinada que muestra la ayuda no valen para todas las redes. La página de creación cita ese ejemplo para Sepolia y Gnosis Chain. La de [despliegue en varias cadenas](https://help.safe.global/articles/9317165368-deploying-a-multi-chain-safe) menciona un cupo de patrocinio en algunas L2. El cupo y las redes pueden cambiar: leé la página ese día, no des por eterno un número viejo.

## Cada red se mira aparte

Safe, en esta guía, es **Ethereum** y otras redes **EVM** que el producto admita. Base y Arbitrum son ejemplos, no una lista cerrada. No es la multifirma nativa de Bitcoin ni de Solana.

Una misma dirección **puede** desplegarse en otra red EVM compatible, porque el despliegue es determinista. No está, por eso, desplegada ni configurada igual en todas. La [documentación de varias cadenas](https://docs.safe.global/advanced/smart-account-multi-chain-deployment) dice que la copia usa la configuración **inicial** (propietarios, umbral, módulos). Si después cambiaste algo en la primera red, la red nueva no hereda ese cambio. Hay versiones viejas que no se pueden clonar, y **zkSync Era** no admite esta misma dirección. Algunas combinaciones de redes L2 tampoco.

Antes de enviar fondos, comprobá en **esa** cadena si el contrato está desplegado y cuáles son los propietarios y el umbral. Mandar a una dirección donde el Safe no existe puede dejarte los fondos colgados. En una red incompatible, la documentación avisa que pueden perderse.

## Si se pierde un firmante

Perder el aparato no es lo mismo que perder el acceso.

- Si todavía tenés la semilla, una recuperación válida del fabricante puede restaurar **ese** firmante en otro dispositivo. No escribas la frase en Safe ni en el teléfono para «ganar compatibilidad».
- Si un firmante se pierde **para siempre** y los otros dos siguen bien, esos dos alcanzan el umbral. Pueden mover lo que está en el Safe y **sustituir** al propietario perdido, dejando el umbral en 2. Ese cambio también es una transacción: hay que leerla como un cambio de llaves, y puede costar gas.
- Si se pierden para siempre **dos** de los tres, el 2 de 3 ya no se puede cumplir. El Safe queda bloqueado, salvo que **antes** hubieras configurado otra recuperación (por ejemplo un módulo de recuperación ya habilitado). No aparece después una semilla central que lo arregle.

La ayuda de configuración lo resume así: si el umbral es menor que la cantidad de firmantes, perder uno no te deja afuera de forma automática. Si no llegás al umbral, no hay acceso.

## Propuesta no probada: practicar primero en Sepolia

**Esto no está hecho.** No ejecutamos la demo, no hay transacción de ejemplo nuestra y no hay un video para seguir.

[Sepolia](https://ethereum.org/developers/docs/networks/) es la red de prueba que ethereum.org recomienda para aplicaciones. El ETH de ahí está pensado para no valer como el de la red principal. Aun así, ethereum.org desaconseja reutilizar la misma cuenta en las dos redes. Usá **claves nuevas**, creadas solo para la prueba. No uses semillas ni fondos con los que custodiás patrimonio. No muestres la semilla a nadie: ni a un grifo, ni a un explorador, ni a esta página.

Si querés ensayar, el objetivo es este, no una lista de clics que no verificamos:

1. Creá tres claves nuevas, solo de prueba, y separadas entre sí.
2. Conseguí ETH de prueba en un grifo de Sepolia. Los grifos cambian y a veces están vacíos. ethereum.org mantiene una lista; desconfiá de cualquier sitio que pida la semilla.
3. En la app de Safe, elegí la red de prueba y armá un 2 de 3 con esas claves. Comprobá la red antes de desplegar.
4. Dejá una operación con **una** firma y mirá que sigue **pendiente**.
5. Sumá la **segunda** firma y ejecutá la transacción. En un explorador de Sepolia, tiene que aparecer confirmada. La firma pendiente, sola, no alcanza.
6. Con los **dos** firmantes que quedan, sustituí al tercero y mantené el umbral en 2. Volvé a mirar el explorador: el cambio de propietarios es otra transacción, no un ajuste local.
7. Cuando termines, no reutilices esas claves para dinero real.

Si en algún paso la interfaz no coincide con este texto, seguí la documentación de Safe y el explorador, no esta propuesta.

## Multifirma en Bitcoin con Sparrow Wallet

A partir de acá ya no hablamos del contrato de Safe. No envíes bitcoin a una dirección de Safe ni esperes que ese contrato firme una transacción de Bitcoin.

En Bitcoin la multifirma es nativa. [Sparrow Wallet](https://sparrowwallet.com) es un programa gratuito para Windows, macOS y Linux. Trabaja con multifirma, con transacciones parcialmente firmadas (**PSBT**) y con carteras físicas por USB o por QR. Descargalo solo desde ese sitio y verificá la firma del archivo.

### Qué firmantes documenta Sparrow

La guía de Sparrow para carteras por USB nombra Trezor, Ledger, Coldcard, BitBox02, Blockstream Jade, KeepKey y OneKey: [cartera conectada](https://sparrowwallet.com/docs/connected-wallet.html). Que un nombre esté en esa lista no reemplaza el modelo ni el firmware. Esta guía no conectó ninguno.

**SafePal** no está en esa lista. No encontramos una confirmación oficial, ni de SafePal ni de Sparrow, de que sus modelos firmen una PSBT de multifirma. No lo des por compatible.

**Tangem** tampoco está en esa lista. No lo presentes como firmante de una multifirma de Bitcoin en Sparrow. No lo probamos.

Si el aparato que tenés no está documentado, alternativas que Sparrow sí describe:

- Otra cartera de esa lista, con **otra** semilla.
- Una segunda Ledger, también con otra frase, no con la misma.
- Una cartera de software creada en Sparrow en **otro** equipo. Es más débil que una cartera física. Solo tiene sentido si esa clave no vive junto a las otras dos.
- El propio Sparrow también documenta firma por archivo o por QR para carteras aisladas. Usá ese camino solo con un aparato que el programa reconozca.

### Pasos en Sparrow

Los nombres de menú son los que usa Sparrow desde hace tiempo. Si tu versión los muestra distinto, seguí la función.

1. **File → New Wallet** y poné un nombre.
2. En *Policy type*, elegí **Multi Signature** y el umbral, por ejemplo 2 de 3.
3. En *Script type*, **Native Segwit (P2WSH)** es la opción por defecto.
4. En cada *Keystore*, importá un firmante: por USB (*Connected Hardware Wallet*), por archivo, por QR o como cartera de software.
5. **Apply** y guardá la cartera.
6. Antes de recibir, mostrá la dirección en la pantalla del dispositivo, si ese dispositivo puede hacerlo.

Para gastar, Sparrow arma un PSBT. Lo firmás con un dispositivo y después con el segundo. Recién entonces se puede difundir. Una firma guardada en el archivo no es la transacción confirmada en un bloque.

## La copia de seguridad en Bitcoin

En Bitcoin **no alcanzan las frases**. Para reconstruir la cartera también hacen falta las claves públicas extendidas (**xpub**) de **todos** los firmantes, o el **descriptor** de la cartera.

- En Sparrow, exportá la cartera y guardá el descriptor (texto y, si te lo ofrece, PDF con QR).
- Dejá una copia del descriptor **junto a cada frase**.
- El descriptor no gasta, pero muestra saldo y movimientos. Guardalo con discreción.

En un 2 de 3, si perdés una frase y no tenés el descriptor ni la xpub de esa cartera, podés quedarte afuera aunque conserves las otras dos frases.

En Safe el registro es otro: propietarios y umbral están en el contrato, en la red donde está desplegado. Anotá la dirección y la red. No hay una semilla maestra que reemplace a los firmantes.

## Errores comunes

- Usar la **misma semilla** para dos o tres direcciones y creer que son independientes.
- Guardar las tres semillas en el **mismo aparato o la misma nube**.
- Escribir la semilla en Safe, o pasarla al teléfono para «hacer compatible» una cartera hardware.
- Creer que el Safe protege las monedas que **siguen en la cartera firmante**.
- Dar un **permiso ERC-20** y pensar que cada gasto va a pedir otra vez dos firmas.
- Activar un **módulo** sin saber qué puede ejecutar. Un Safe básico no lo hace solo.
- Creer que **desconectar** la página revoca permisos o módulos.
- Firmar sin leer red, destinatario, importe, datos y cambios de propietarios, umbral o módulos.
- Que dos firmantes confirmen apurados la misma pantalla, sin mirarla cada uno.
- Confundir una **firma pendiente** con una transacción ya confirmada.
- Enviar a la dirección del Safe en una **red donde no está desplegado**, o donde la configuración ya no es la misma.
- Tomar **«Pay later»** como un 2 de 3 gratis permanente. La creación sin gas que documenta Safe es 1 de 1.
- En Bitcoin, no guardar el **descriptor**.
- Descargar Sparrow, Safe o las apps de las carteras desde un anuncio.
- Confundir **Safe** con **SafePal**, o el contrato de Ethereum con la multifirma de Bitcoin.

## Cómo montar tu propio nodo Bitcoin

Esta parte no arma el Safe ni lo protege. Un nodo es tu propia copia de la cadena de Bitcoin, para consultar y verificar sin pedirle el saldo a un servidor ajeno.

### Qué te aporta y qué no

**Sí:**

- **Privacidad en Bitcoin.** Sparrow puede mirar tus direcciones en tu nodo, no en un servidor que las vea junto a tu IP.
- **Verificación propia.** Comprobás las reglas de Bitcoin y tus transacciones, sin delegar esa lectura.

**No:**

- No guarda las claves. Eso lo hacen las carteras y, en Bitcoin, la multifirma.
- No frena una estafa, un *phishing* ni una firma que no debías dar.
- No tiene efecto sobre un Safe de Ethereum. Son redes distintas.

### Hardware

- Un mini PC o una placa pequeña. Umbrel ha orientado a equipos como la Raspberry Pi; el modelo vigente está en [umbrel.com](https://umbrel.com), no lo fijes solo por esta página.
- Un **SSD con margen**. En octubre de 2026 esta guía citaba unos **780 GB** de cadena, un crecimiento de unos **80 GB al año** y un pedido de Bitcoin Core de al menos unos **870 GB** libres. El número se mueve: antes de comprar, leé el requisito actual en [bitcoincore.org](https://bitcoincore.org).
- Internet estable. Mejor por cable.

### Software

- **[Umbrel](https://umbrel.com):** sistema con tienda de apps. Desde ahí se instala el nodo de Bitcoin y un servidor Electrum.
- **[Start9](https://start9.com) (StartOS):** parecido, con el acento en la privacidad.
- **[Bitcoin Core](https://bitcoincore.org):** el programa de referencia, en tu propio equipo. El equipo tiene que quedar encendido mucho tiempo.

### La primera sincronización

El nodo descarga y verifica la historia de Bitcoin desde 2009. Según el equipo y la conexión, puede ir **de un día a varios**. Es normal dejarlo trabajar.

### Conectar Sparrow por Electrum (Electrs o Fulcrum)

Sparrow consulta más cómodo a través de un **servidor Electrum**, que indexa la cadena.

1. En Umbrel, instalá **Electrs** o **Fulcrum** desde la tienda (en StartOS, el servidor Electrum de la suya) y esperá a que termine de indexar. Los nombres de la tienda pueden cambiar.
2. Copiá la dirección y el puerto que muestra la app. A veces también hay una dirección Tor.
3. En Sparrow: **Settings → Server → Private Electrum**. Pegá los datos.
4. **Test Connection.** Si queda en verde, estás usando tu nodo.

Si Bitcoin Core corre en el mismo equipo, Sparrow también puede hablarle directo (*Bitcoin Core*), sin servidor Electrum.

## Fuentes

Consultadas el 7 de noviembre de 2026. Las interfaces cambian; si una pantalla no coincide, manda el sitio oficial.

- [Crear un Safe en el navegador](https://help.safe.global/articles/7267202833-creating-a-safe-on-a-web-browser)
- [Conceptos de la cuenta inteligente](https://docs.safe.global/advanced/smart-account-concepts)
- [Qué configuración de Safe usar](https://help.safe.global/articles/1038062742-what-safe-setup-should-i-use)
- [FAQ de comisiones de Safe{Wallet}](https://help.safe.global/articles/9993850744-safewallet-gas-fees-faq)
- [Módulos de Safe](https://docs.safe.global/advanced/smart-account-modules)
- [Límites de gasto](https://help.safe.global/articles/3961440620-set-up-and-use-spending-limits)
- [Despliegue en varias cadenas (docs)](https://docs.safe.global/advanced/smart-account-multi-chain-deployment)
- [Despliegue en varias cadenas (ayuda)](https://help.safe.global/articles/9317165368-deploying-a-multi-chain-safe)
- [EIP-20, el estándar del permiso de tokens](https://eips.ethereum.org/EIPS/eip-20)
- [SafePal: proveedor Ethereum para la web](https://devdocs.safepal.com/Connect-wallet/Web/ethereum.html). Evidencia genérica. No es una certificación de un modelo concreto con Safe.
- [Comunicado de la Safe Ecosystem Foundation, 28 de febrero de 2025](https://safefoundation.org/blog/safe-ecosystem-foundation-statement)
- [Redes de Ethereum, incluida Sepolia](https://ethereum.org/developers/docs/networks/)
- [Sparrow Wallet](https://sparrowwallet.com) y su [guía de cartera por USB](https://sparrowwallet.com/docs/connected-wallet.html)
- [Bitcoin Core](https://bitcoincore.org), [Umbrel](https://umbrel.com) y [Start9](https://start9.com)

---

*Texto revisado el 7 de noviembre de 2026. La ficha anterior llevaba la fecha 31 de octubre de 2026. No es asesoramiento financiero ni de inversión: la custodia y las decisiones son de cada persona.*
