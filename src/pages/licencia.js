import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import tw from "tailwind.macro"
import styled from "@emotion/styled"
import { Title } from "../components/import"
import SVGGoodTeam from "../assets/good_team.svg"
import Fade from "react-reveal/Fade"
const LicensePage = () => (
  <Layout>
    <SEO title="Licencia" />
    <Hero>
      <ImgContainer>
        <SVGGoodTeam />
      </ImgContainer>
      <Title className="mt-12">
        <Fade top cascade duration={1200}>
          <h1 className="font-mono">
            Documento legal <br /> super importante
          </h1>
        </Fade>
      </Title>
    </Hero>
    <Article>
      <ArticleText>
        Me importa un bledo lo que hagas con el diseño y el código que aquí
        encuentres. En realidad si me importa.
      </ArticleText>
      <ArticleText>
        Espero que lo tomes y lo uses, sin dar crédito, en un sitio web super
        comercial y te vuelvas rico. Espero que lo uses en el trabajo para
        impresionar a tu jefe y tengas un gran aumento.
      </ArticleText>
      <ArticleText>
        Espero que te ayude a diseñar un espacio y que ese espacio impresione a
        alguien que crees que es súper linde, que te cases y tengas bebés
        inteligentes y tranquilos.
      </ArticleText>
      <ArticleText>
        Espero que utilices este código en una publicación en un blog que
        escribas y que el sitio web sea mucho más popular y asombroso que este.
      </ArticleText>
      <ArticleText>
        Si te copias de un artículo completo de este sitio y lo publicas tal
        cual haciendote pasar como que es tuyo, ahí si que la estarias bardeando
        un toque.
      </ArticleText>
      <ArticleText>
        No me voy a enojar por robar, solo creo que eres mejor que eso y quiero
        verte haciendolo mejor. No voy a estar persiguiendote. Para eso,
        prefiero jugar a la pelota con mi perro.
      </ArticleText>
      <ArticleText>
        La única vez que me enojaré contigo seria si te esfuerzas por hacerme
        daño de alguna manera. Y probablemente no me enfade, solo sentiré
        tristeza. (A menos que este teniendo tambien un mal día, en cuyo caso,
        me disculpo por adelantado por cualquier sarcasmo).
      </ArticleText>
      <ArticleText>
        Quiero que internete mejore y ser todo un Don Juansito Protector dudo
        que nos lleve ahí.
      </ArticleText>
      <ArticleText>
        Entiendo que otras personas se sientan diferentes acerca de esto y
        puedan tener o no razones semilegítimas para proteger su código, diseño,
        arte, escritura, trabajo o lo que sea. Yo mismo trabajo en algunos
        proyectos de código cerrado.
      </ArticleText>
      <ArticleText>Cooparaje no es uno de ellos.</ArticleText>
      <ArticleText>
        <strong>¡Vuelvete loco!</strong>
      </ArticleText>
      <ArticleText>Y como siempre, gracias por compartir.</ArticleText>
      <ArticleText>
        <ArticleLink
          href="https://css-tricks.com/license/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Versión en español de la licencia de css-tricks.com
        </ArticleLink>
      </ArticleText>
    </Article>
  </Layout>
)

const Hero = styled.div`
  ${tw`flex flex-col items-center justify-end pt-6 text-center bg-indigo-200 border-b border-indigo-500 shadow-sm`}
`

const ImgContainer = styled.div`
  ${tw`relative w-full max-w-md pt-12 pl-8 m-0`}
  height: auto;
  svg {
    ${tw`w-full`}
    height: auto
  }
`

export const Article = styled.div`
  ${tw`max-w-xl px-3 m-auto mt-6 text-left`}
`

export const ArticleText = styled.p`
  ${tw`text-xl `}
  strong {
    ${tw`text-bold`}
  }
`

export const ArticleLink = styled.a`
  ${tw`border-b border-gray-600 hover:text-indigo-600 hover:border-indigo-600`}
`

export default LicensePage
