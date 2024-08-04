
import ClientLayout from './client-layout'

export const metadata = {
  title: {
    default: 'Cristian Fontanini Portfolio',
    template: '%s | Cristian Fontanini',
  },
  description: {
    default: '¡Bienvenido a mi Portfolio! Espero que te disfrutes mirandolo',
    template: '%s',
  },
  icons: {
    icon: "./favicon.png",
    apple: "./favicon.png",
    favicon: "./favicon.png"
  }
}

export default function Layout({ children }) {
  return <ClientLayout>{children}</ClientLayout>
}