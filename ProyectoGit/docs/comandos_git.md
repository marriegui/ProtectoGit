
# Comandos Git Utilizados

## Clonar Repositorio

```bash
git clone https://github.com/argob/poncho.git
```

## Crear Rama

```bash
git checkout -b proyectosgit
```

## Copiar el Repositorio Clonado a tu Proyecto

```bash
cp -r ../proyecto/* proyectos/proyecto-clonado/
```

## Agregar Archivos al Repositorio Remoto en la Rama Main

```bash
git remote add origin https://github.com/marriegui/ProtectoGit.git
git branch -M main
git push -u origin main
```

## Agregar una Nueva Rama (Test)

```bash
git checkout test
git branch
```

## Copiar Contenido del Proyecto a la Rama Test

```bash
git push origin test
```

## Modificar y Subir el Archivo `README.md`

```bash
git add readme.md
git commit -m "Añadido README con información del curso y herramientas de Git"
```

## Agregar la Hoja de Referencia (Cheatsheet)

```bash
git add cheatsheet_marriegui.pdf 
git commit -m "Agrego cheatsheet"
```

## Hacer Push sobre la Rama Test

```bash
git push -u origin test
```
