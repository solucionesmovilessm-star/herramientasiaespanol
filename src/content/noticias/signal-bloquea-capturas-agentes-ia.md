---
title: "Signal bloquea capturas de pantalla para que los agentes de IA no lean tus chats"
date: 2026-11-22
summary: "Signal restringe las capturas en iOS 27 y activa la seguridad de pantalla en Android si un asistente de IA intenta leer la app. Así evita que agentes del sistema se lleven tus chats. Puedes desactivar la protección."
sources:
  - https://signal.org/blog/protecting-your-privacy/
  - https://techcrunch.com/2026/11/21/signal-restricts-mobile-screenshots-as-it-confronts-existential-threat-of-ai-surveillance/
draft: false
---

## Qué ha pasado

El 20 de noviembre de 2026, **Meredith Whittaker**, presidenta de Signal, explicó en el blog de la organización una medida nueva: **restringir que los agentes de IA integrados en el sistema operativo capturen y almacenen datos de Signal**. Ya lo habían hecho en Windows, el año pasado, para bloquear por defecto las capturas que alimentaban **Recall** de Microsoft. Ahora aplican una lógica parecida en **iOS 27** (bloqueando capturas en la app) y, en **Android**, activando automáticamente el ajuste de «seguridad de pantalla» cuando detectan que un asistente de IA intenta leer la pantalla de Signal.

El problema, según Signal, es que Google (Gemini Intelligence) y Apple (Onscreen Awareness / Siri AI) están metiendo agentes en el sistema que **escanean lo que hay en pantalla** para responderte o actuar por ti. Una vez capturado, ese contenido queda fuera del control de Signal, en una base local o en un servidor del fabricante, y pone en riesgo la privacidad de **todos** los participantes de la conversación, también de los mensajes que deberían desaparecer. Whittaker lo llama una **«amenaza existencial»** para la misión de Signal. TechCrunch recoge el mismo anuncio.

## Qué puedes hacer (y qué no cubre)

Quien quiera seguir haciendo capturas **puede desactivar la protección** en los ajustes de Signal. Whittaker avisa de que, si lo haces, puedes exponer tu contenido y el de tus contactos a esos agentes, y **se rompe la garantía de privacidad** de la app.

La solución, admite, es **incompleta**: bloquear capturas no evita otros caminos, por ejemplo que un agente lea archivos que ya están en el dispositivo. En **macOS**, Signal dice que no puede bloquear las capturas de forma fiable y, de momento, recomienda añadir Signal a las apps excluidas de Siri en Ajustes del Sistema. En Android, tampoco cubre todas las variantes del sistema por igual: en muchos fabricantes no pueden detectar bien el intento de captura si las capturas ya están desactivadas, así que se centran en detectar al asistente de IA.

Signal pide a Apple, Google y Microsoft una vía clara para que una app se **opte por no** entrar en el radar de los agentes (pantalla, archivos, notificaciones y demás) sin romper el uso normal, y una documentación técnica mucho más precisa.

## Qué cambia para ti

Si usas Signal en el móvil, la app puede empezar a **impedir capturas** o a activarte la seguridad de pantalla cuando un agente intenta mirar. Si necesitas una captura puntual, el interruptor está en ajustes, con ese coste de privacidad. Y si usas Signal en el Mac, la protección automática no llega: toca excluir la app en Siri, según la propia Signal.
