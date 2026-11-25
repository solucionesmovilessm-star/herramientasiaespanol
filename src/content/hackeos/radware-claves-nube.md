---
title: "Radware revela una brecha que expuso claves de acceso a la nube de clientes"
description: "Un atacante accedió a una API interna del Cloud WAF de Radware expuesta a internet sin autenticación. Se pudieron ver datos de contacto y, en un subconjunto, claves para exportar logs."
date: 2026-11-24
nivel: alto
riesgo: "En un subconjunto de clientes quedaron expuestas las credenciales para exportar logs a AWS S3, Azure Blob Storage o SFTP. Radware pide rotar esas claves y revisar accesos desde el 19 de noviembre."
sources:
  - https://www.bleepingcomputer.com/news/security/radware-discloses-breach-exposing-customer-cloud-access-keys/
---

Según un análisis de causas al que accedió BleepingComputer, el 19 de noviembre un atacante accedió a una API interna de gestión del Cloud WAF de Radware que estaba expuesta a internet sin autenticación. Se pudieron ver datos de contacto de clientes y, en un subconjunto, las credenciales configuradas para exportar logs a AWS S3, Azure Blob Storage o SFTP; no se expuso el tráfico inspeccionado por el WAF, certificados ni los servicios de DDoS. Radware bloqueó la API, rotó credenciales internas y pide a los clientes afectados que roten esas claves y revisen accesos desde el 19 de noviembre; algunos ya habrían recibido alertas de AWS por un IP desconocido. En el momento del reportaje, Radware no había emitido un comunicado público ni un informe a la SEC.
