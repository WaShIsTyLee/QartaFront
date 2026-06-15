# QartaFront

Frontend de Qarta, una plataforma para que restaurantes gestionen su carta digital y la compartan con sus clientes mediante códigos QR.

## Stack

- **Angular 22** — framework principal
- **Angular Material** — componentes de UI
- **TypeScript** — lenguaje
- **RxJS** — manejo de peticiones HTTP con `lastValueFrom`

## Lo que hace (hasta ahora)

- Registro e inicio de sesión conectado con QartaAPI
- Autenticación con JWT almacenado en localStorage
- Guards de rutas: usuarios no autenticados no pueden acceder al dashboard, usuarios autenticados no pueden volver al login
- Formularios reactivos con validación

## Estructura del proyecto

```
src/app/
├── core/
│   ├── services/      → AuthService y otros servicios globales
│   └── guards/        → authGuard y noAuthGuard
├── shared/
│   └── components/    → componentes reutilizables
└── pages/
    ├── auth/
    │   ├── login/
    │   └── register/
    └── dashboard/
```

## Cómo arrancarlo

1. Clona el repo
2. Instala las dependencias:

```bash
npm install
```

3. Asegúrate de que QartaAPI está corriendo en `https://localhost:7296`
4. Arranca el proyecto:

```bash
ng serve
```

5. Abre el navegador en `http://localhost:4200`

## Rutas

| Ruta | Componente | Guard |
|------|------------|-------|
| /login | Login | noAuthGuard |
| /register | Register | noAuthGuard |
| /dashboard | Dashboard | authGuard |

## Notas

- El frontend espera que la API esté en `https://localhost:7296` en local. Para producción hay que actualizar la URL base en `AuthService`
- El token JWT se guarda en localStorage y se elimina al hacer logout
"# QartaFront" 
