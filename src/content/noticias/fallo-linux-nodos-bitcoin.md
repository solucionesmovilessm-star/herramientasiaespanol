---
title: "Fallo crítico en Linux (CVE-2026-98432): qué pasa si tienes un nodo Bitcoin o Lightning y qué hacer ya"
date: 2026-10-31
summary: "Un fallo del núcleo de Linux con gravedad 9.8 sobre 10 puede permitir que alguien tome el control de un equipo a distancia. Peter Todd y myNode avisan a quienes tienen un nodo Bitcoin o Lightning en casa. Te explicamos qué es, si te afecta y qué hacer paso a paso."
sources:
  - https://x.com/peterktodd/status/2116039505954185279
  - https://x.com/mynodebtc/status/2116251407191830898
  - https://lists.openwall.net/linux-cve-announce/2026/10/15/1
  - https://thehackernews.com/2026/10/linux-kernel-tcp-flaw-with-98-cvss.html
  - https://www.bleepingcomputer.com/news/security/critical-linux-kernel-flaw-allows-remote-root-attacks-on-mptcp-servers/
  - https://access.redhat.com/security/vulnerabilities/RHSB-2026-016
  - https://kb.ciq.com/article/security-advisories/cve-2026-98432-mitigation
---

## Qué ha pasado

Se ha descubierto un fallo grave en el **núcleo de Linux** (el "kernel", la parte central del sistema que controla la memoria, la red y el hardware). Se llama **CVE-2026-98432** (CVE es simplemente el número de catálogo que se da a cada fallo de seguridad conocido).

El equipo de seguridad del propio kernel le da una gravedad de **9.8 sobre 10**. Otras empresas, como Red Hat, SUSE u Oracle, lo puntúan más bajo (entre 5.9 y 8.1) porque creen que es difícil de aprovechar. Pero todas coinciden en que hay que actualizar.

## Por qué importa si tienes un nodo Bitcoin o Lightning

Muchos nodos caseros (los "aparatitos" o mini-PC que validan la red Bitcoin o gestionan canales Lightning) funcionan con **Linux** y tienen **puertos abiertos** a internet, es decir, aceptan conexiones de fuera.

- **Peter Todd**, desarrollador conocido de Bitcoin, [avisó](https://x.com/peterktodd/status/2116039505954185279) de que quien tenga **lnd** (un programa muy usado para Lightning) en Linux con puertos abiertos debería **apagarlo hasta que haya parche**. Aclaró que **la culpa no es de lnd**, sino del kernel.
- **myNode**, una de las distribuciones de nodo más populares, [confirmó](https://x.com/mynodebtc/status/2116251407191830898) que **todos sus nodos están afectados**, que prepara una actualización y que usar **solo Tor** puede ayudar, aunque lo más seguro es **quitar el acceso remoto o apagar el nodo** mientras tanto.

¿Por qué lnd en concreto? Está programado en **Go**, y desde la versión Go 1.24 los programas en Go activan por defecto una función de red llamada **MPTCP** (TCP multicamino: permite que una conexión use varias rutas a la vez). El ataque demostrado necesita justo un servidor escuchando con MPTCP.

## Qué es el fallo, en sencillo

Cuando tu equipo recibe una conexión nueva por internet (IPv4), el kernel guarda unos datos temporales. Por un error de sincronización, puede **seguir usando esos datos después de haberlos borrado** (en jerga, un *use-after-free*). Un atacante que envía paquetes preparados una y otra vez puede aprovecharlo.

Anthropic contó que su IA, Claude, escribió un exploit (un programa de ataque) que lograba **ejecutar órdenes como administrador (root) sin contraseña**, a distancia, en servidores con MPTCP. En su prueba tardó unos 48 minutos en preparar el ataque y unos 5 más en tomar el control. Un intento fallido no tumba el equipo, así que el atacante puede seguir probando.

A 29-30 de octubre, ningún aviso oficial informaba de ataques reales con este fallo. Pero eso puede cambiar.

## Qué hacer, paso a paso

1. **Comprueba si tienes un nodo.** Si tienes un myNode, Umbrel, Start9, RaspiBlitz, un Raspberry Pi o un mini-PC con Bitcoin o Lightning, asume que usa Linux. Si solo usas una app de cartera en el móvil, esto no va contigo.
2. **Mira qué kernel tienes.** En la terminal del nodo escribe:
   ```bash
   uname -r
   ```
   El fallo está corregido en las versiones **6.12.113, 6.18.56, 7.2.10 y 7.3** (y en 5.10.272, 5.15.223, 6.1.190 y 6.6.159 para series antiguas) o posteriores dentro de cada serie. Ojo: tu distribución puede aplicar el arreglo con otro número; lo fiable es el aviso de tu proveedor.
3. **Actualiza** el sistema y el software del nodo en cuanto salga la actualización, y **reinicia** (el kernel nuevo solo se usa tras reiniciar).
4. **Mientras no haya parche, quita el acceso remoto**: cierra los puertos abiertos en el router y desactiva el acceso desde fuera. Pasar a **solo Tor** reduce la exposición, pero no sustituye al parche.
5. **Si no estás seguro, apágalo.** Un nodo Bitcoin apagado unos días no pierde tus fondos. Con Lightning, ten en cuenta que mientras está apagado no puede vigilar tus canales, así que no lo dejes apagado semanas sin informarte.

## Para quien quiera más detalle

- Afecta a IPv4; IPv6 no tiene este problema. El fallo existe desde Linux 4.4.
- Según The Hacker News (29 de octubre), Debian, Oracle Linux, SUSE y Amazon Linux ya tienen kernels corregidos al menos para algunas versiones; **Ubuntu y Red Hat todavía no**.
- El equipo de Go explica que se puede desactivar MPTCP en un programa con `GODEBUG=multipathtcp=0`, pero lo considera una medida **frágil**: el fallo de fondo no es exclusivo de MPTCP. CIQ (Rocky Linux) comprobó que desactivar MPTCP en el sistema (`net.mptcp.enabled=0`) **no basta**.
- CIQ publica una regla de cortafuegos temporal que descarta los paquetes TCP IPv4 con "opciones IP". Es para usuarios avanzados y puede afectar a tráfico legítimo.
- La única solución real es **un kernel parcheado**.

*Esta noticia es solo de seguridad. No es consejo de inversión.*
