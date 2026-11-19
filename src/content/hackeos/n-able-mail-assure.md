---
title: "N-able confirma acceso no autorizado en la nube de Mail Assure y SpamExperts"
description: "N-able confirma acceso no autorizado a un servidor de Mail Assure y SpamExperts. Los portales, las API, la cuarentena y los registros siguen caídos en tres regiones. El correo, dice, sigue fluyendo."
date: 2026-11-19
nivel: alto
riesgo: "Los partners no pueden gestionar filtros, cuarentena ni registros en Mail Assure y SpamExperts Hosted Cloud en las tres regiones. N-able no tiene, de momento, evidencia de que se hayan comprometido datos de clientes ni buzones. El flujo de correo y el filtrado siguen activos, según la compañía."
sources:
  - https://thehackernews.com/2026/11/n-able-confirms-hackers-accessed-cloud.html
  - https://dailysecurityreview.com/cyber-security/n-able-confirms-breach-of-mail-assure-and-spamexperts-cloud-server/
draft: false
---

## Qué pasó

**N-able** confirmó el miércoles 18 de noviembre de 2026 que actores no identificados lograron **acceso no autorizado a uno de los servidores** de la nube alojada de **Mail Assure** y **SpamExperts**. La compañía deshabilitó las interfaces de administración y las API. The Hacker News y Daily Security Review recogen el aviso y citan a N-able.

La empresa había empezado a investigar el **16 de noviembre** una interrupción del servicio. Al principio la atribuyó a una combinación de configuración de la plataforma y dependencias del servicio; más tarde concluyó que la causa era un **incidente de seguridad**.

N-able afirma: «Hemos tomado medidas para mitigar la amenaza y seguimos reforzando los servicios para reducir el riesgo de que vuelva a ocurrir». La investigación continúa. «En este momento no tenemos evidencia de que se hayan comprometido datos de clientes, incluido el acceso a los buzones de los inquilinos».

Siguen afectados Mail Assure y SpamExperts en **América, APAC y Europa**. El **flujo de correo** y el **filtrado de entrada y salida**, según N-able, **siguen disponibles**. En cambio, el **portal de administración**, las **API**, la **cuarentena** y los **registros** permanecen fuera de línea hasta que la restauración se valide. A las **08:00 UTC del 19 de noviembre**, esa restauración seguía en marcha.

N-able dice que se ha puesto en contacto con los partners de Mail Assure y SpamExperts Hosted Cloud con información sobre su entorno y sobre si deben o no tomar medidas. La compañía indica que el incidente **no está relacionado** con las vulnerabilidades de N-central conocidas como Able2Shell, 4EverAble2Shell y Agent2Shell.

N-able no ha explicado en esas crónicas **cómo entraron** los atacantes ni **cuánto tiempo** tuvieron acceso.

## A quién afecta

- Partners y administradores de **Mail Assure** y **SpamExperts Hosted Cloud** en las tres regiones: no pueden, de momento, ajustar políticas, revisar la cuarentena ni consultar registros.
- Quienes reciben o envían correo a través de esos filtros: N-able dice que el correo y el filtrado siguen funcionando.
- No hay, en las fuentes consultadas, evidencia publicada de buzones o datos de clientes robados. Eso puede cambiar si avanza la investigación.

## Qué hacer

- Si eres partner, **lee el aviso que te haya enviado N-able** y sigue solo esas instrucciones; no hace falta «reproducir» nada.
- Comprueba que el **correo entra y sale** con normalidad. Si la cuarentena está caída, ten en cuenta que **no podrás gestionar mensajes retenidos** desde el portal hasta que vuelva.
- No des por hecho un robo de buzones, pero **mantente atento** a correos raros o a avisos posteriores de la compañía.
- No mezcles este incidente con el de **N-central**: N-able los ha separado de forma explícita.
