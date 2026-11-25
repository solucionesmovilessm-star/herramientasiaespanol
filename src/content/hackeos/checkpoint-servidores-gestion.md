---
title: "Una campaña compromete servidores de gestión de Check Point en 22 organizaciones"
description: "GreyNoise documentó la campaña GT13: 24 servidores de Check Point quedaron comprometidos en al menos 22 organizaciones de 17 países. El acceso puede continuar."
date: 2026-11-24
nivel: critico
riesgo: "Los atacantes robaron bases de datos de firewall, credenciales y material de la CA interna, e intentaron desactivar políticas de seguridad. Check Point confirmó el uso de CVE-2026-16232."
sources:
  - https://www.bleepingcomputer.com/news/security/hackers-compromise-check-point-servers-in-22-organizations/
  - https://www.greynoise.io/blog/check-point-security-management-servers-intrusion-campaign
---

GreyNoise documentó la campaña GT13 contra al menos 22 organizaciones de 17 países (gobierno, finanzas, energía, transporte, minería y manufactura): 24 servidores de Check Point Security Management quedaron comprometidos entre el 17 de octubre y el 2 de noviembre, y los investigadores creen que el acceso puede continuar. En la fase posterior a la intrusión se explotó CVE-2026-16232, un bypass de autenticación en SmartConsole que Check Point reveló en julio de 2026 ya con explotación en la naturaleza; los atacantes robaron bases de datos de firewall, credenciales y material de la CA interna, e incluso intentaron desactivar políticas de seguridad. Check Point confirmó a BleepingComputer el 25/11 que se usó esa CVE ya conocida y una adaptación del módulo público de Metasploit; el uso de IA en la campaña, sugerido por GreyNoise, no está confirmado.
