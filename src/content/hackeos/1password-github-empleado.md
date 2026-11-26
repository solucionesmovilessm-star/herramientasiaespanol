---
title: "Hackean 1Password: robaron datos de clientes a través de la cuenta de GitHub de un empleado"
description: "El 19 de noviembre un atacante accedió a la cuenta de GitHub de un empleado de 1Password, subió código malicioso y descargó registros de una parte de los clientes. Las bóvedas y las contraseñas no se vieron afectadas."
date: 2026-11-26
nivel: alto
riesgo: "El riesgo principal es el phishing: desconfía de correos inesperados que pidan asegurar la cuenta, restablecer la contraseña o verificar datos, entra siempre desde la app o la web oficial y nunca compartas tu contraseña, tu Secret Key ni códigos de verificación."
sources:
  - https://1password.com/blog/update-on-nov-2026-security-incident
  - https://www.bleepingcomputer.com/news/security/1password-customer-data-stolen-after-employee-github-account-breach/
---

El 19 de noviembre un atacante accedió a la cuenta corporativa de GitHub de un empleado de 1Password, subió código malicioso al backend y descargó registros de una parte de los clientes: nombres, correos electrónicos, identificadores de cuenta, metadatos y algunos tokens de enlaces de invitación y de recuperación. Según 1Password, las bóvedas, las contraseñas, las Secret Keys y las claves de recuperación no se vieron afectadas, y los clientes no tienen que cambiar nada. El riesgo principal es el phishing: desconfía de correos inesperados que pidan «asegurar» la cuenta, restablecer la contraseña o verificar datos, entra siempre desde la app o la web oficial y nunca compartas tu contraseña, tu Secret Key ni códigos de verificación. 1Password ha ampliado los códigos de recuperación de 6 dígitos a 10 caracteres.
