import Subtitle from '@/components/Subtitle'
import { FC } from 'react'

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <p>
        Fecha de última actualización: 06-Ago-2023
        <br />
        Bienvenido/a a Ultimate Dev Roadmap - UDR. Esta política de privacidad
        tiene como objetivo informarte sobre cómo recopilamos, utilizamos,
        almacenamos y protegemos los datos personales que puedan ser recopilados
        en el futuro, así como tus derechos como usuario en relación con tus
        datos personales.
        <br />
        <span className="text-rose-400">Nota</span>: No se recolectará ningún
        tipo de dato en cuanto no haya autenticación del usuario (creación de un
        usuario por formulario).
      </p>
      <br />
      <Subtitle title="1. Responsable del tratamiento de datos">
        <p>
          Ultimate Dev Roadmap - UDR es un proyecto personal desarrollado por
          Augusto Sasso, ubicado en Avenida de los 7 Jefes 4043, Santa Fe
          Capital, Santa Fe, Argentina. Puedes contactarme en{' '}
          <a
            href="mailto:augustosasso97@gmail.com"
            className="text-cyan-500 hover:underline"
          >
            augustosasso97@gmail.com
          </a>{' '}
          para cualquier consulta relacionada con la privacidad de tus datos.
        </p>
      </Subtitle>
      <Subtitle title="2. Recopilación de datos">
        <p>
          Por el momento, Ultimate Dev Roadmap - UDR no recopila datos
          personales de los usuarios. Sin embargo, en un futuro, podríamos
          considerar la posibilidad de recopilar información como nombre,
          dirección de correo electrónico y contraseña, únicamente a través de
          un formulario de registro para la creación de una cuenta de usuario en
          el sitio.
        </p>
      </Subtitle>
      <Subtitle title="3. Uso de datos">
        <p>
          Cuando se implemente el sistema de autenticación y creación de cuentas
          de usuario, los datos personales recopilados se utilizarán
          exclusivamente para autenticar y verificar la veracidad de los
          comentarios realizados por los usuarios en el sitio web, brindando así
          un feedback más relevante sobre el proyecto.
        </p>
      </Subtitle>
      <Subtitle title="4. Base legal">
        <p>
          La base legal para el tratamiento de los datos personales se basará en
          el consentimiento expreso del usuario proporcionado durante el proceso
          de registro, una vez se implemente.
        </p>
      </Subtitle>
      <Subtitle title="5. Compartir datos">
        <p>
          Aclaramos que en ningún momento compartiremos los datos personales de
          los usuarios con terceros. La información que proporciones será
          utilizada exclusivamente dentro del ámbito del proyecto Ultimate Dev
          Roadmap - UDR.
        </p>
      </Subtitle>
      <Subtitle title="6. Almacenamiento de datos">
        <p>
          Los datos personales de los usuarios serán almacenados de manera
          indefinida, siempre y cuando no solicites su eliminación. Puedes
          ejercer tu derecho a la supresión de datos enviando una solicitud a{' '}
          <a
            href="mailto:augustosasso97@gmail.com"
            className="text-cyan-500 hover:underline"
          >
            augustosasso97@gmail.com
          </a>
          .
        </p>
      </Subtitle>
      <Subtitle title="7. Medidas de seguridad">
        <p>
          Ultimate Dev Roadmap - UDR implementará medidas de protección
          adecuadas para salvaguardar tus datos personales, utilizando las
          funcionalidades de seguridad proporcionadas por Next-Auth.
        </p>
      </Subtitle>
      <Subtitle title="8. Uso de cookies y tecnologías de seguimiento">
        <p>
          Ultimate Dev Roadmap - UDR permitirá el uso de cookies y otras
          tecnologías de seguimiento siempre y cuando no afecten el
          funcionamiento y finalidad del proyecto. Puedes ajustar las
          configuraciones de tu navegador para gestionar las preferencias de
          cookies.
        </p>
      </Subtitle>
      <Subtitle title="9. Derechos del usuario">
        <p>
          Como usuario de Ultimate Dev Roadmap - UDR, tendrás derecho a acceder,
          rectificar y suprimir tus datos personales. Si deseas ejercer estos
          derechos o tienes alguna inquietud sobre tus datos, no dudes en
          contactarme a{' '}
          <a
            href="mailto:augustosasso97@gmail.com"
            className="text-cyan-500 hover:underline"
          >
            augustosasso97@gmail.com
          </a>
          .
        </p>
      </Subtitle>
      <Subtitle title="10. Cambios en la política de privacidad">
        <p>
          Esta política de privacidad podrá ser actualizada ocasionalmente para
          reflejar cambios en las prácticas de protección de datos de Ultimate
          Dev Roadmap - UDR. Te recomendamos revisar periódicamente esta página
          para estar informado sobre cualquier actualización.
          <br />
          Recuerda que el uso de Ultimate Dev Roadmap - UDR implica tu
          aceptación de esta política de privacidad. Si no estás de acuerdo con
          alguno de sus términos, te recomendamos abstenerse de utilizar el
          sitio.
        </p>
      </Subtitle>
      <p>
        Gracias por confiar en Ultimate Dev Roadmap - UDR. Tu privacidad y
        confianza son de suma importancia para nosotros.
      </p>
    </>
  )
}

export default page
