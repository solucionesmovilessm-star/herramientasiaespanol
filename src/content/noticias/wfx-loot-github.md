---
title: "wfx-loot: una campaña en GitHub roba secretos de CI con cuentas secuestradas"
date: 2026-11-18
summary: "Aikido, OX, GitGuardian y SecurityWeek documentan wfx-loot: desde el 10 de noviembre, cuentas de GitHub secuestradas roban secretos de CI y borran las huellas. Si viste ciertos pull requests, rota las credenciales."
sources:
  - https://www.aikido.dev/blog/compromised-github-accounts-push-ci-secret-stealer-to-tens-of-thousands-of-repositories
  - https://www.ox.security/blog/thousands-of-github-accounts-hijacked-with-wfx-loot-ci-secret-stealing-malware-via-github-actions-npm/
  - https://blog.gitguardian.com/wfx-loot-a-ci-secret-stealer-pushed-with-stolen-github-credentials/
  - https://www.securityweek.com/attacker-targets-60000-github-repositories-in-credential-theft-campaign/
draft: false
---

## Qué ha pasado

Varias firmas de seguridad coinciden en que, desde el **10 de noviembre de 2026**, un actor con credenciales robadas de GitHub está detrás de la campaña **wfx-loot**: primero comprueba que puede escribir en un repositorio y, si puede, cuela un script que intenta robar secretos del entorno de **GitHub Actions** o de un `npm install`, y después **revierte** el cambio y **borra** el registro de la ejecución.

Los números exactos varían según quién cuenta y cuándo actualizó su recuento, así que conviene atribuirlos. **Aikido Security** habló de **4.837** cuentas comprometidas que abrieron pull requests de prueba en más de **61.000** repositorios, y de al menos **1.806** repositorios en los que el payload llegó a ejecutarse y se exfiltraron credenciales. **OX Security** sitúa las pruebas en más de **66.200** pull requests, los commits maliciosos en **8.093** repositorios públicos y confirma la misma cifra de al menos **1.806** exfiltraciones. **GitGuardian** y **SecurityWeek** describen la misma operación. El atacante parece buscar secretos de CI (tokens, nubes, claves de publicación y también de proveedores de IA), no tanto plantar una librería trampa en la cadena de suministro, aunque Aikido vio indicios de que el payload llegó a algún paquete de Packagist y de Go.

## Cómo reconocerlo (sin entrar en el malware)

Las firmas publican señales que puedes buscar en tus repos, sobre todo a partir del 10 de noviembre:

- Un pull request titulado **`docs: dependency audit notes`**, a menudo desde una rama **`wfx-docs`**.
- Commits como **`ci: refresh build cache`**, **`chore: add ci helper`** o **`chore: add dependency audit workflow`**.
- Ramas cortas del tipo **`chore/`** seguidas de ocho caracteres aleatorios, un workflow desechable o un script inesperado en la raíz, ligado a un gancho `postinstall` en `package.json`.

GitGuardian señala que, en la oleada de noviembre, GitHub llegó a retener algunas formas basadas en archivos de workflow, y que el actor pasó a apoyarse más en el gancho de npm, que no modifica un workflow y se ejecuta cuando un flujo ya existente lanza `npm install`.

## Qué hacer si te puede afectar

Si aparece cualquiera de esas señales, o si falta un número de ejecución en el historial de Actions, **trata como filtrados** todos los secretos a los que ese trabajo pudiera llegar —aunque el workflow no los nombrara de forma explícita— y **rótalos**: tokens de GitHub, nubes, registros de paquetes y claves de APIs de IA. Revisa también que no quede un gancho o un script residual. No hace falta «reproducir» el ataque: con auditar el historial y rotar credenciales basta.

La campaña seguía documentándose días después del 10 de noviembre; conviene volver a comprobar los repositorios aunque el primer aviso te llegara tarde.
