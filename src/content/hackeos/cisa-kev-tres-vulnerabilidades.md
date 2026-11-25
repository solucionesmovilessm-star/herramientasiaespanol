---
title: "CISA añade al catálogo KEV tres vulnerabilidades ya explotadas"
description: "CISA añadió al catálogo KEV tres CVE con explotación activa: en la librería Idunno.AntiCsrf, en Drupal Core y en Optimizely Web Experimentation. Pide priorizar estos parches."
date: 2026-11-24
nivel: alto
riesgo: "Hay evidencia de explotación activa que puede llevar a ejecución remota de código en Idunno.AntiCsrf y Drupal Core, y a inyectar JavaScript malicioso en Optimizely."
sources:
  - https://www.cisa.gov/news-events/alerts/2026/11/24/cisa-adds-three-known-exploited-vulnerabilities-catalog
---

CISA incorporó al catálogo de vulnerabilidades explotadas conocidas (KEV) tres CVE con evidencia de explotación activa: CVE-2026-131914 (deserialización de datos no confiables en la librería heredada de ASP.NET Idunno.AntiCsrf, que puede llevar a ejecución remota de código), CVE-2026-132165 (ejecución remota de código en Drupal Core) y CVE-2026-132224 (control externo de datos de estado críticos en Optimizely Web Experimentation, usado para inyectar JavaScript malicioso). El aviso oficial recuerda a las agencias federales civiles las obligaciones de la directiva BOD 26-04 y anima al resto de organizaciones a priorizar estos parches. Help Net Security (25/11) detalla que Idunno.AntiCsrf lleva años sin mantenimiento y que Mandiant recomienda dejar de usarla; esa pieza es posterior al cierre estricto de las 10:00 del 25/11, así que se cita solo como contexto.
