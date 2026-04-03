'use client'

import { LegalPageShell } from '@/app/components/LegalPageShell'

export default function PrivacyContent() {
  return (
    <LegalPageShell
      title="Política de Privacidade"
      meta="Vigente a partir de 1º de abril de 2025 · Versão 1.0"
    >
      <p className="intro">
        Esta Política descreve como o AdaptCV coleta, usa e protege seus dados pessoais, em conformidade
        com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).
      </p>

      <section>
        <h2>
          <span className="num">1</span> Quem somos
        </h2>
        <p>
          O <strong className="text-foreground">AdaptCV</strong> é uma plataforma online que utiliza
          inteligência artificial para adaptar currículos a vagas de emprego específicas. Operamos no
          endereço{' '}
          <a href="https://adaptcv.app" target="_blank" rel="noopener noreferrer">
            adaptcv.app
          </a>
          .
        </p>
        <p>
          Para fins da LGPD, o AdaptCV atua como <strong className="text-foreground">controlador</strong>{' '}
          dos dados pessoais tratados por meio desta plataforma.
        </p>
        <p>
          Contato do responsável pelo tratamento de dados:{' '}
          <a href="mailto:privacidade@adaptcv.app">privacidade@adaptcv.app</a>
        </p>
      </section>

      <hr />

      <section>
        <h2>
          <span className="num">2</span> Quais dados coletamos
        </h2>
        <p>Coletamos apenas os dados estritamente necessários para a prestação do serviço:</p>
        <ul>
          <li>
            <strong className="text-foreground">Dados de identificação:</strong> endereço de e-mail
            fornecido no momento do uso.
          </li>
          <li>
            <strong className="text-foreground">Currículo (CV):</strong> documento enviado por você para
            adaptação. Pode conter nome, histórico profissional, formação, contatos e outras informações
            pessoais.
          </li>
          <li>
            <strong className="text-foreground">Descrição da vaga:</strong> texto ou documento fornecido
            para contextualizar a adaptação.
          </li>
          <li>
            <strong className="text-foreground">Dados de pagamento:</strong> processados integralmente
            pelo Mercado Pago. Não armazenamos dados de cartão de crédito ou bancários.
          </li>
          <li>
            <strong className="text-foreground">Dados de uso:</strong> logs de acesso, endereço IP e
            dados técnicos do navegador, coletados automaticamente para segurança e desempenho.
          </li>
        </ul>
      </section>

      <hr />

      <section>
        <h2>
          <span className="num">3</span> Para que usamos seus dados
        </h2>
        <p>Seus dados são utilizados exclusivamente para as seguintes finalidades:</p>
        <ul>
          <li>Processar seu currículo com IA e gerar a versão adaptada;</li>
          <li>Enviar o currículo adaptado para o e-mail informado;</li>
          <li>Gerenciar seu saldo de créditos e processar pagamentos;</li>
          <li>Responder a dúvidas e solicitações de suporte;</li>
          <li>Garantir a segurança e o funcionamento da plataforma;</li>
          <li>Cumprir obrigações legais e regulatórias.</li>
        </ul>
        <div className="highlight-box">
          <strong>Importante:</strong> não usamos seu currículo para treinar modelos de IA, não
          compartilhamos seus dados com anunciantes e não vendemos suas informações a terceiros.
        </div>
      </section>

      <hr />

      <section>
        <h2>
          <span className="num">4</span> Base legal para o tratamento (LGPD)
        </h2>
        <p>Tratamos seus dados com base nos seguintes fundamentos previstos na LGPD:</p>
        <ul>
          <li>
            <strong className="text-foreground">Execução de contrato</strong> (art. 7º, V): para processar
            seu CV e entregar o serviço contratado.
          </li>
          <li>
            <strong className="text-foreground">Legítimo interesse</strong> (art. 7º, IX): para garantir
            segurança, prevenir fraudes e melhorar a plataforma.
          </li>
          <li>
            <strong className="text-foreground">Cumprimento de obrigação legal</strong> (art. 7º, II):
            quando exigido por lei ou autoridade competente.
          </li>
          <li>
            <strong className="text-foreground">Consentimento</strong> (art. 7º, I): para envio de
            comunicações de marketing, quando aplicável; e para cookies de medição de audiência (Google
            Analytics), quando você aceitar no aviso de cookies do site.
          </li>
        </ul>
      </section>

      <hr />

      <section>
        <h2>
          <span className="num">5</span> Compartilhamento de dados
        </h2>
        <p>
          Seus dados podem ser compartilhados apenas com parceiros essenciais para a prestação do
          serviço, sempre sob contrato e obrigações de confidencialidade:
        </p>
        <ul>
          <li>
            <strong className="text-foreground">Provedores de IA</strong> (ex.: Anthropic): para processar
            o conteúdo do currículo. Os dados são transmitidos de forma segura e não são retidos pelo
            provedor para fins de treinamento.
          </li>
          <li>
            <strong className="text-foreground">Mercado Pago:</strong> para processamento de pagamentos.
          </li>
          <li>
            <strong className="text-foreground">Provedor de e-mail transacional:</strong> para envio do
            currículo adaptado ao seu e-mail.
          </li>
          <li>
            <strong className="text-foreground">Provedor de hospedagem:</strong> para operação da
            infraestrutura da plataforma.
          </li>
          <li>
            <strong className="text-foreground">Google (Analytics):</strong> apenas se você consentir com
            cookies de medição no aviso exibido no site — para estatísticas agregadas de uso.
          </li>
        </ul>
        <p>Não transferimos dados para fins comerciais ou publicitários.</p>
      </section>

      <hr />

      <section>
        <h2>
          <span className="num">6</span> Retenção de dados
        </h2>
        <p>Seus dados são retidos pelos seguintes prazos:</p>
        <ul>
          <li>
            <strong className="text-foreground">Currículo e descrição de vaga:</strong> excluídos em até{' '}
            <strong className="text-foreground">30 dias</strong> após o processamento.
          </li>
          <li>
            <strong className="text-foreground">E-mail e histórico de uso:</strong> mantidos enquanto sua
            conta estiver ativa ou pelo prazo necessário para cumprimento de obrigações legais.
          </li>
          <li>
            <strong className="text-foreground">Logs de acesso:</strong> retidos por até 6 meses, conforme
            o Marco Civil da Internet (Lei nº 12.965/2014).
          </li>
        </ul>
        <p>Após o prazo de retenção, os dados são excluídos de forma segura ou anonimizados.</p>
      </section>

      <hr />

      <section>
        <h2>
          <span className="num">7</span> Seus direitos (LGPD, art. 18)
        </h2>
        <p>Você tem os seguintes direitos em relação aos seus dados pessoais:</p>
        <ul>
          <li>
            <strong className="text-foreground">Confirmação e acesso:</strong> saber se tratamos seus dados
            e acessá-los.
          </li>
          <li>
            <strong className="text-foreground">Correção:</strong> solicitar a correção de dados
            incompletos ou desatualizados.
          </li>
          <li>
            <strong className="text-foreground">Anonimização, bloqueio ou eliminação:</strong> de dados
            desnecessários ou tratados em desconformidade com a LGPD.
          </li>
          <li>
            <strong className="text-foreground">Portabilidade:</strong> receber seus dados em formato
            estruturado.
          </li>
          <li>
            <strong className="text-foreground">Eliminação:</strong> solicitar a exclusão dos dados
            tratados com base no seu consentimento.
          </li>
          <li>
            <strong className="text-foreground">Revogação do consentimento:</strong> a qualquer momento,
            sem prejuízo dos tratamentos anteriores.
          </li>
          <li>
            <strong className="text-foreground">Oposição:</strong> opor-se a tratamento realizado com
            fundamento em outra base legal.
          </li>
        </ul>
        <div className="highlight-box">
          Para exercer qualquer um desses direitos, envie uma solicitação para{' '}
          <strong>
            <a href="mailto:privacidade@adaptcv.app">privacidade@adaptcv.app</a>
          </strong>
          . Responderemos em até 15 dias.
        </div>
      </section>

      <hr />

      <section>
        <h2>
          <span className="num">8</span> Segurança
        </h2>
        <p>
          Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados contra acesso
          não autorizado, perda, destruição ou divulgação indevida, incluindo:
        </p>
        <ul>
          <li>Transmissão de dados via HTTPS/TLS;</li>
          <li>Acesso restrito aos dados por parte da equipe;</li>
          <li>Monitoramento de segurança e logs de acesso.</li>
        </ul>
        <p>
          Em caso de incidente de segurança que possa afetar seus direitos, notificaremos a Autoridade
          Nacional de Proteção de Dados (ANPD) e os titulares afetados nos prazos previstos em lei.
        </p>
      </section>

      <hr />

      <section>
        <h2>
          <span className="num">9</span> Cookies
        </h2>
        <p>
          Utilizamos um <strong className="text-foreground">cookie de preferência de idioma</strong> para
          lembrar o idioma que você escolheu no site. Se você{' '}
          <strong className="text-foreground">aceitar</strong> no aviso de cookies, também utilizamos{' '}
          <strong className="text-foreground">cookies do Google Analytics</strong> para entender de forma
          agregada como a plataforma é utilizada. Se você recusar, o Google Analytics não será carregado;
          o restante do site continua disponível.
        </p>
      </section>

      <hr />

      <section>
        <h2>
          <span className="num">10</span> Alterações nesta Política
        </h2>
        <p>
          Podemos atualizar esta Política periodicamente. Em caso de alterações relevantes, notificaremos
          você por e-mail ou por aviso na plataforma com antecedência mínima de 15 dias. A data de vigência
          sempre estará indicada no topo deste documento.
        </p>
      </section>

      <hr />

      <section>
        <h2>
          <span className="num">11</span> Contato e autoridade competente
        </h2>
        <p>Para dúvidas, solicitações ou reclamações relacionadas ao tratamento de dados pessoais:</p>
        <ul>
          <li>
            E-mail: <a href="mailto:privacidade@adaptcv.app">privacidade@adaptcv.app</a>
          </li>
        </ul>
        <p>
          Você também tem o direito de apresentar reclamação à{' '}
          <strong className="text-foreground">Autoridade Nacional de Proteção de Dados (ANPD)</strong>:{' '}
          <a href="https://www.gov.br/anpd" target="_blank" rel="noopener noreferrer">
            gov.br/anpd
          </a>
        </p>
      </section>
    </LegalPageShell>
  )
}
