'use client'

import Link from 'next/link'
import { LegalPageShell } from '@/app/components/LegalPageShell'

export default function TermsContent() {
  return (
    <LegalPageShell
      title="Termos de Uso"
      meta="Vigente a partir de 1º de abril de 2025 · Versão 1.0"
      footerEmail="contato@adaptcv.app"
    >
      <p className="intro">
        Ao utilizar o AdaptCV, você concorda com estes Termos de Uso. Leia com atenção antes de usar a
        plataforma. Em caso de dúvidas, entre em contato pelo e-mail{' '}
        <a href="mailto:contato@adaptcv.app">contato@adaptcv.app</a>.
      </p>

      <section>
        <h2>
          <span className="num">1</span> O serviço
        </h2>
        <p>
          O <strong className="text-foreground">AdaptCV</strong> é uma plataforma online que utiliza
          inteligência artificial para adaptar currículos a descrições de vagas de emprego, com o objetivo
          de aumentar a compatibilidade com sistemas ATS e destacar as qualificações relevantes para cada
          oportunidade.
        </p>
        <p>
          O serviço está disponível em{' '}
          <a href="https://adaptcv.app" target="_blank" rel="noopener noreferrer">
            adaptcv.app
          </a>{' '}
          e é operado em conformidade com a legislação brasileira, incluindo o Código de Defesa do
          Consumidor (Lei nº 8.078/1990) e a LGPD (Lei nº 13.709/2018).
        </p>
      </section>

      <hr />

      <section>
        <h2>
          <span className="num">2</span> Elegibilidade
        </h2>
        <p>Para usar o AdaptCV, você deve:</p>
        <ul>
          <li>Ter ao menos 18 anos de idade ou a maioridade civil aplicável em sua localidade;</li>
          <li>Fornecer informações verdadeiras e atualizadas;</li>
          <li>Usar o serviço para fins legítimos e pessoais.</li>
        </ul>
      </section>

      <hr />

      <section>
        <h2>
          <span className="num">3</span> Conta e acesso
        </h2>
        <p>
          O uso do AdaptCV pode exigir o fornecimento de um endereço de e-mail válido. Você é responsável
          pela veracidade dos dados fornecidos e pela confidencialidade do acesso à sua conta.
        </p>
        <p>Reservamo-nos o direito de suspender ou encerrar contas que violem estes Termos.</p>
      </section>

      <hr />

      <section>
        <h2>
          <span className="num">4</span> Créditos e pagamentos
        </h2>
        <p>O AdaptCV opera com um sistema de créditos:</p>
        <ul>
          <li>
            A <strong className="text-foreground">primeira adaptação é gratuita</strong>, sem necessidade
            de cadastro de pagamento;
          </li>
          <li>
            Adaptações adicionais requerem a aquisição de créditos, disponíveis em pacotes de R$ 9,00 a R$
            59,00;
          </li>
          <li>
            Os pagamentos são processados pelo <strong className="text-foreground">Mercado Pago</strong>,
            sujeito aos termos e políticas desse serviço;
          </li>
          <li>Créditos adquiridos não são reembolsáveis após o uso;</li>
          <li>Créditos não utilizados não possuem prazo de validade.</li>
        </ul>
        <div className="warning-box">
          Em caso de problemas técnicos que impeçam a entrega do currículo adaptado, entre em contato com
          nosso suporte. Analisaremos cada caso e, se confirmarmos falha do sistema, restituiremos os
          créditos utilizados.
        </div>
      </section>

      <hr />

      <section>
        <h2>
          <span className="num">5</span> Uso aceitável
        </h2>
        <p>Ao usar o AdaptCV, você se compromete a:</p>
        <ul>
          <li>Enviar apenas currículos e documentos dos quais você é o titular ou possui autorização;</li>
          <li>Não usar o serviço para fins fraudulentos, ilegais ou prejudiciais a terceiros;</li>
          <li>Não tentar contornar, sobrecarregar ou comprometer a infraestrutura da plataforma;</li>
          <li>
            Não reproduzir, redistribuir ou revender os outputs gerados para uso comercial sem autorização;
          </li>
          <li>
            Não fornecer conteúdo que viole direitos de terceiros, incluindo dados pessoais de outras
            pessoas sem consentimento.
          </li>
        </ul>
      </section>

      <hr />

      <section>
        <h2>
          <span className="num">6</span> Conteúdo gerado por IA
        </h2>
        <p>
          O AdaptCV utiliza modelos de inteligência artificial para gerar versões adaptadas do seu
          currículo. Você deve estar ciente de que:
        </p>
        <ul>
          <li>
            O resultado gerado é uma sugestão baseada nas informações fornecidas por você. A responsabilidade
            pela revisão e uso do currículo adaptado é sua;
          </li>
          <li>
            Não garantimos que o currículo adaptado resultará em entrevistas, contratações ou qualquer
            resultado específico no processo seletivo;
          </li>
          <li>
            Recomendamos revisar o conteúdo gerado antes de enviá-lo a empregadores, garantindo que reflita
            fielmente sua experiência real.
          </li>
        </ul>
        <div className="highlight-box">
          <strong>Nunca inclua informações falsas em seu currículo.</strong> O AdaptCV adapta e destaca o
          que você já possui — não inventa experiências. A responsabilidade pelo conteúdo final é sempre do
          usuário.
        </div>
      </section>

      <hr />

      <section>
        <h2>
          <span className="num">7</span> Propriedade intelectual
        </h2>
        <p>
          <strong className="text-foreground">Seu currículo é seu.</strong> Você retém todos os direitos
          sobre o conteúdo que envia. Ao usar o AdaptCV, você nos concede uma licença limitada, não exclusiva
          e temporária para processar esse conteúdo com a finalidade exclusiva de prestar o serviço
          contratado.
        </p>
        <p>
          Os sistemas, algoritmos, interface, marca e demais elementos da plataforma AdaptCV são de
          propriedade exclusiva do AdaptCV e protegidos pela legislação de propriedade intelectual
          aplicável.
        </p>
      </section>

      <hr />

      <section>
        <h2>
          <span className="num">8</span> Limitação de responsabilidade
        </h2>
        <p>
          O AdaptCV é fornecido &quot;como está&quot;, sem garantias expressas ou implícitas de resultados
          específicos no mercado de trabalho.
        </p>
        <p>Não nos responsabilizamos por:</p>
        <ul>
          <li>Decisões de contratação tomadas por empregadores;</li>
          <li>Interpretações de ATS ou recrutadores sobre currículos adaptados;</li>
          <li>Perdas indiretas decorrentes do uso ou impossibilidade de uso do serviço;</li>
          <li>Interrupções temporárias do serviço por manutenção ou causas técnicas.</li>
        </ul>
        <p>Nossa responsabilidade total perante você fica limitada ao valor dos créditos não utilizados em sua conta.</p>
      </section>

      <hr />

      <section>
        <h2>
          <span className="num">9</span> Privacidade
        </h2>
        <p>
          O tratamento de dados pessoais é regido pela nossa{' '}
          <Link href="/privacidade" className="font-medium text-primary underline-offset-2 hover:underline">
            Política de Privacidade
          </Link>
          , que é parte integrante destes Termos.
        </p>
      </section>

      <hr />

      <section>
        <h2>
          <span className="num">10</span> Alterações no serviço e nos Termos
        </h2>
        <p>
          Podemos atualizar estes Termos a qualquer momento. Em caso de alterações relevantes, notificaremos
          os usuários ativos com antecedência mínima de 15 dias, por e-mail ou aviso na plataforma.
        </p>
        <p>
          O uso continuado do serviço após a data de vigência das alterações implica aceitação dos novos
          Termos.
        </p>
      </section>

      <hr />

      <section>
        <h2>
          <span className="num">11</span> Rescisão
        </h2>
        <p>
          Você pode encerrar o uso do serviço a qualquer momento. Créditos não utilizados permanecem
          disponíveis até sua solicitação de exclusão de conta.
        </p>
        <p>
          Reservamo-nos o direito de suspender ou encerrar o acesso de usuários que violem estes Termos,
          sem prejuízo das medidas legais cabíveis.
        </p>
      </section>

      <hr />

      <section>
        <h2>
          <span className="num">12</span> Lei aplicável e foro
        </h2>
        <p>
          Estes Termos são regidos pelas leis da República Federativa do Brasil. Em caso de disputas não
          resolvidas amigavelmente, fica eleito o foro da Comarca de Salvador, Bahia, com exclusão de
          qualquer outro, por mais privilegiado que seja.
        </p>
      </section>

      <hr />

      <section>
        <h2>
          <span className="num">13</span> Contato
        </h2>
        <p>Para dúvidas, solicitações ou reclamações relacionadas a estes Termos:</p>
        <ul>
          <li>
            E-mail: <a href="mailto:contato@adaptcv.app">contato@adaptcv.app</a>
          </li>
          <li>
            Site:{' '}
            <a href="https://adaptcv.app" target="_blank" rel="noopener noreferrer">
              adaptcv.app
            </a>
          </li>
        </ul>
        <p>
          Também é possível registrar reclamações no{' '}
          <a href="https://www.consumidor.gov.br" target="_blank" rel="noopener noreferrer">
            consumidor.gov.br
          </a>
          , plataforma oficial do Governo Federal para resolução de conflitos de consumo.
        </p>
      </section>
    </LegalPageShell>
  )
}
