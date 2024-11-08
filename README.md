## Tecnologías Utilizadas

- **Next.js**: Framework de React para aplicaciones web de alto rendimiento y renderizado del lado del servidor.
- **Tailwind CSS**: Framework de CSS de utilidad para una estilización rápida y responsiva.
- **shadcn/ui**: Componentes preconstruidos y personalizados para interfaces de usuario elegantes.
- **tRPC**: Facilitador de APIs type-safe que simplifica la comunicación entre el cliente y el servidor.
- **TypeScript**: Superset de JavaScript que agrega tipado estático para una mayor robustez y mantenibilidad.
- **React Player**: Componente de React para la reproducción de medios.
- **@tanstack/react-query**: Herramienta de manejo de estado y fetching de datos en React.
- **Zod**: Biblioteca de validación y tipado para TypeScript.

## Requisitos Previos

- **Node.js 16** o superior
- **npm** o **yarn** (gestores de dependencias)

## Instalación

Siga estos pasos para configurar el proyecto localmente:

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/CristoBits0101/vidext-technical-test.git
   ```

2. **Navegar al directorio del proyecto:**

   ```bash
   cd vidext-technical-test
   ```

3. **Instalar las dependencias:**

   ```bash
   npm install
   ```

   o, si prefieres yarn:

   ```bash
   yarn install
   ```

4. **Iniciar la aplicación en modo de desarrollo:**

   ```bash
   npm run dev --turbo
   ```

   o con yarn:

   ```bash
   yarn dev --turbo
   ```

5. **Abrir en el navegador web:**
   Accede a la aplicación en [http://localhost:3000](http://localhost:3000)

### 1. **Pruebas Unitarias de Procedimientos tRPC**

Utiliza Jest para probar los procedimientos definidos en tu router de tRPC.

**Configuración de Jest**:

```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom @types/jest ts-jest
```

**Archivo de configuración de Jest (\*\***`jest.config.js`\***\*)**:

```javascript
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
}
```

**Ejemplo de prueba unitaria para el procedimiento \*\***`getVideos`\*\*:

```typescript
import { videoRouter } from '@/server/routers/video'

describe('Video Router', () => {
  it('should return all videos', async () => {
    const result = await videoRouter.createCaller({}).getVideos()
    expect(result).toBeDefined()
    expect(result).toHaveLength(videoData.length) // Ajusta según el mock de `videoData`
  })
})
```

### 2. **Pruebas de Integración con Supertest**

Supertest te permite probar la API completa para asegurarte de que los endpoints respondan correctamente.

**Instalación de Supertest**:

```bash
npm install --save-dev supertest
```

**Ejemplo de prueba de integración**:

```typescript
import request from 'supertest'
import { handler } from '@/server/api-handler' // Ruta a tu handler

describe('API Integration Test', () => {
  it('should respond with 200 for getVideos request', async () => {
    const response = await request(handler)
      .post('/api/trpc/video.getVideos')
      .send({})
    expect(response.status).toBe(200)
    expect(response.body.result.data).toBeDefined()
  })

  it('should increment video view count', async () => {
    const response = await request(handler)
      .post('/api/trpc/video.incrementView')
      .send({ input: { videoId: 1 } })
    expect(response.status).toBe(200)
    expect(response.body.result.data.video.views).toBeGreaterThan(0)
  })
})
```

### 3. **Validación de Esquemas con Zod**

Zod se utiliza para validar la estructura de las respuestas y asegurar que los datos cumplan con el esquema definido.

**Ejemplo de prueba de validación con Zod**:

```typescript
import { z } from 'zod'

const videoSchema = z.object({
  id: z.number(),
  title: z.string(),
  views: z.number(),
  likes: z.number(),
  likedByUser: z.boolean(),
})

describe('Schema Validation', () => {
  it('should match the video schema', () => {
    const video = {
      id: 1,
      title: 'Sample Video',
      views: 100,
      likes: 10,
      likedByUser: false,
    }
    expect(() => videoSchema.parse(video)).not.toThrow()
  })
})
```

### 4. **Pruebas de Cliente con React Testing Library**

Prueba la integración del cliente de tRPC con la interfaz de usuario.

**Ejemplo de prueba de cliente**:

```typescript
import { render, screen } from '@testing-library/react'
import App from '@/pages/index'
import { trpc } from '@/utils/trpc'

test('renders data from tRPC API', async () => {
  render(<App />)
  const videoTitle = await screen.findByText(/Sample Video/i)
  expect(videoTitle).toBeInTheDocument()
})
```

Con estos ejemplos, podrás probar tus procedimientos de tRPC de manera integral y garantizar que tanto el servidor como el cliente funcionan correctamente.
