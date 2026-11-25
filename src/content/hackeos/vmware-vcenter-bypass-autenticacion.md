---
title: "Broadcom publica 23 fallos de VMware, uno crítico de evasión de autenticación en vCenter"
description: "Broadcom emitió el aviso VMSA-2026-0011, de gravedad crítica, para ESX, vCenter, Workstation, Fusion, Tools y Avi Load Balancer. El fallo más grave es un bypass de autenticación en vCenter."
date: 2026-11-24
nivel: alto
riesgo: "CVE-2026-123903, con CVSS 9.8, permitiría entrar en vCenter sin autenticarse si hay acceso de red. Broadcom no reporta explotación activa y recomienda aplicar los parches del aviso."
sources:
  - https://support.broadcom.com/web/ecx/support-content-notification/-/external/content/SecurityAdvisories/0/39626
---

Broadcom emitió el aviso VMSA-2026-0011, de gravedad crítica, con actualizaciones para ESX, vCenter, Workstation, Fusion, Tools y Avi Load Balancer. El fallo más grave es CVE-2026-123903, un bypass de autenticación en el VMware Directory Service de vCenter, con CVSS 9.8: un atacante con acceso de red a vCenter podría entrar sin autenticarse. El aviso también incluye, entre otros, fallos de ejecución de código en ESX (CVE-2026-123910 y CVE-2026-123911). Broadcom no reporta explotación activa de estos fallos nuevos y recomienda aplicar los parches del propio aviso.
