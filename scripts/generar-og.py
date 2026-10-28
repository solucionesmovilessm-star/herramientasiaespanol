"""Genera public/og.png. No hace falta para el build: la imagen ya queda en el repositorio."""
from PIL import Image, ImageDraw, ImageFont

width, height = 1200, 630
image = Image.new("RGB", (width, height), "#f3efe4")
draw = ImageDraw.Draw(image)
draw.rectangle((0, 0, 28, height), fill="#8f3418")
draw.rounded_rectangle((78, 78, 168, 168), radius=22, fill="#8f3418")

font_mark = ImageFont.truetype("/usr/share/fonts/truetype/noto/NotoSerif-Bold.ttf", 42)
font_title = ImageFont.truetype("/usr/share/fonts/truetype/noto/NotoSerif-Bold.ttf", 72)
font_sub = ImageFont.truetype("/usr/share/fonts/truetype/noto/NotoSans-Regular.ttf", 32)

draw.text((96, 100), "hí", font=font_mark, fill="#fff8f3")
draw.text((78, 230), "Herramientas IA", font=font_title, fill="#1b1914")
draw.text((78, 320), "en español", font=font_title, fill="#8f3418")
draw.text(
    (78, 460),
    "Directorio, agentes, skills y servidores MCP",
    font=font_sub,
    fill="#5e584e",
)
draw.text((78, 520), "herramientasiaespanol.com", font=font_sub, fill="#0f6e56")
image.save("public/og.png", "PNG")
