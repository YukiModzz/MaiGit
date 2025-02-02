exports.listLanguages = (prefix) => {
return `Você pode ver a lista de idiomas disponíveis em para usar no tradutor ou gtts aqui: https://cloud.google.com/translate/docs/languages
–
• Exemplificando o uso das funções dos comandos *gtts e tradutor*:
–
↳ *Comando:* ${prefix}gtts pt Mory
*[pt]* - O idioma, o sotaque que ele(a) irá falar no áudio.
*[mory]* - Vai ser o que será o texto ou frase falado por ele(a).
–
↳ *Comando:* ${prefix}tradutor pt|love you
*[pt]* - O idioma que vai ser realizado a tradução da palavra ou texto.
*[love you]* - O texto/palavra que ele(a) vai fazer a tradução para o idioma.`
}

exports.bemvindo = (prefix) => {
return `Este comando é para informar, como você deve ativar o bem vindo, e lembrando, esse bemvindo, contém uma legenda diferente, a cada grupo que for colocado, o bemvindo2 tem essa função também.
–
• As diferenças entre os bem vindos é que o bemvindo tem foto e o bemvindo2 não contém foto em si somente a mensagem.
–
• Para desativar ou ativar o *bemvindo ou bemvindo2*, use os números 0 ou 1. 
\t• Exemplo de como ativar e desativar o recurso em seu grupo: 
\t\t• *Ativando o recurso:* ${prefix}bemvindo 1 ou ${prefix}bemvindo2 1, ative somente um dos dois para evitar flood em seu grupo.
\t\t• *Desativando o recurso:* ${prefix}bemvindo 0 ou ${prefix}bemvindo2 0, caso um dos 2 esteja ativado.
–
• Para realizar a troca do fundo da imagem do bem vindo, é só mandar uma foto no WhatsApp, retangular e marcar ela com o comando *${prefix}fundobemvindo* ou se quer trocar a do saiu, use *${prefix}fundosaiu*
\t• *Observação:* Os comandos para mudar o fundo é somente disponibilizado o uso ao proprietário(s) do bot.
–
• *Parâmetros usados que podem ser usados para personalizar sua mensagem:*
*#hora#* => Com essa definição inserida em seu argumento, irá mostrar a hora no momento exato que foi realizada a entrada ou saída do integrante do grupo.
*#nomedogp#* => Usada para mostrar o nome do grupo em seu texto de bem-vindo.
*#numerodele#* => Tem a função de mostrar o número do integrante que entrou ou saiu do grupo.
*#prefixo#* => Vai aparecer qual o símbolo que você está utilizando no bot, para fazer ele funcionar.
*#descrição#* => Com essa definição irá mostrar a descrição do grupo ou regras como você preferir chamar.
–
Para definir uma legenda de quando um integrante sair ou entrar em seu grupo, veja os exemplos baixo:
• Adicionar a legenda ou mensagem para dar as saudações ao novo integrante de forma personalizada: 
\t\t• Caso esteja usando o *bem-vindo* (com foto), use: *${prefix}legendabv sua mensagem..*
\t\t• Usando o *bem-vindo2* (sem foto)? Use *${prefix}legendabv2 sua mensagem..*
• Definir uma legenda ou mensagem para a saída de um integrante do grupo:
\t\t• Caso esteja usando o *bem-vindo* (com foto), use: *${prefix}legendasaiu sua mensagem..*
\t\t• Usando o *bem-vindo2* (sem foto)? Use *${prefix}legendasaiu2 sua mensagem..*`
}

exports.infoOwner = (prefix, NickDono, numerodn, NomeDoBot, sender) => {
return `Olá @${sender.split("@")[0]}, aqui está as informações sobre meu dono:
–
• Número do proprietário: wa.me/${numerodn}
• Proprietário: ${NickDono}`
}

exports.configbot = (prefix) => {
return `*COMO CONFIGURAR O BOT, TUTORIAL ABAIXO:*
–
Primeiro ligue o bot no termux, e vá para o WhatsApp do bot em algum privado, utilize os seguintes comandos.
*Obs:* Pode por letras modificadas também se você quiser!
–
• *1)* Para alterar o nome do bot, use o seguinte comando:
\t• ${prefix}Nome-bot Nome que deseja colocar em seu bot
–
• *2)* Para alterar o nick do dono do bot, use o seguinte comando:
\t• ${prefix}Nick-dono Seu nick aqui
–
• *3)* Configure o número do dono, com o seguinte comando:
\t• ${prefix}numero-dono 558288279194
*Obs:* O número tem que ser junto, e não pode conter o símbolo de + nem - e não pode ter o 9 da operadora, tem que ser o número idêntico ao seu do whatsapp.
–
• *4)* Configure o prefixo que você deseja no bot, usando o seguinte comando:
\t• ${prefix}prefixo-bot #
*Obs:* Pode por qualquer símbolo, se o seu símbolo for ${prefix} ele vai passar a ser # de acordo com o que você mudou.
–
Boa sorte! Dúvidas? Entre em contato com o criador, usando: *${prefix}criador*`
}

exports.infoTinderSabs = (prefix) => {
return `🌟😼 - Aprenda a como se registrar no tinder da Sab's, a ideia do tinder é você encontrar um(a) parceiro(a) ou um(a) amigo(a) rainbow, sabe? O projeto foi elaborado e estruturado por *@Matheus*.
—
• *${prefix}rgtinder* -> Registre-se no tinder da Sab's através deste comando, ele vai te explicar o que você deve retornar ou não.
—
• *${prefix}meutinder* -> Veja como está seu perfil atualmente no Tinder Sab's.
—
• *${prefix}rolar ou ${prefix}tinder* -> Veja os participantes com este comando aqui!
—
• *${prefix}tindernome* -> Troque seu nome no nosso sistema, realizamos na hora.
—
• *${prefix}tinderidade* -> Completou ano ou quer mudar? Alteramos na mesma hora.
—
• *${prefix}setgene* -> Mudar o seu gênero que está atualmente no sistema.
—
• *${prefix}setfiltro* -> Coloque o filtro que você deseja atualmente, explicando: 1 para homens, 2 para mulheres e 3 para todos.
—
• *${prefix}setsex* -> Mude a sua sexualidade, caso ouver um erro ou você mudou...
—
• *${prefix}tinderbio* -> (Digitar a sua biografia que você deseja atualmente.
—
• *${prefix}tinderfoto* -> Marque a sua foto que você deseja para mudar no sistema.
—
• *${prefix}sairtinder* -> Caso você desejar deixar de ser incluído no tinder.`
}

exports.infoRent = (prefix) => {
return `• INFORMAÇÕES SOBRE O ALUGUEL:
–
Novo sistema de aluguel para facilitar a vida de nossos usuários, recentemente foi criado o modo aluguel para os grupos, agora ele está de forma global, ou seja, desativou esse modo em todos os grupos os usos serão liberados para todos os participantes sem a necessidade de registrar o grupo na lista de aluguel.
~ Aviso: O comando *${prefix}dados* é usado para consultar o tempo que falta para acabar o seu aluguel no grupo. (Para os adms do grupo aonde está alugado!)
–
• Caso você alugue seu bot está configuração é muito boa e funcional para você, para manter o controle com seus clientes... 
O comando está desativado de fábrica, para ativar e desativar use o comando: ${prefix}modoaluguel, ou seja o 1 é para ativar, já o 0 é para desativar o modo de forma global. Caso ative, leia os próximos parágrafos da informação, aqui esta todo o tutorial de como usar este sistema:
–
*1.* Para adicionar o grupo na lista de aluguel registrado sem gerar o código que faz o registro automático e nescessário o dono está no grupo futuramente à ser registrado no aluguel, use: *${prefix}addrent 558298.../dias*.
—
*2.* Para remover dias do grupo adicionado no aluguel, use o comando (usar o comando no grupo que está registrado): *${prefix}tirarrent quantidade de dias que você deseja remover..*
—
*3.* Para remover o aluguel do grupo da lista, use este comando no grupo aonde você vai alugar o bot: *${prefix}delrent*, após o uso deste comando devo lembrar que o bot não irá emitir mais nenhuma função no grupo, haverá o limite de 5 tentativas em cada grupo, isto é o padrão do bot.
—
*4.* Para liberar o uso no grupo por 24 horas como um teste, é nescessário o uso deste comando no grupo aonde vai ser disponibilizado o recurso: *${prefix}cortesia24*
—
*5.* Este comando tem a função de mostrar todos os grupos alugados registrados: *${prefix}listrent*, já este mostra top 3 de grupos que estão perto de vencer: *${prefix}lastrent*
—
*6.* Este comando mostra todas aa chaves de aluguel que foram criadas por você (dono(a) do bot) e também mostra o status da chave, se ela foi validada ou não: *${prefix}codelistrent*
—
*7.* Como você já leu o tópico 1, você viu que ele ativa dentro do grupo, já este comando você pode utilizar no pv do bot para realizar o registro do grupo. Este comando gera uma chave e você irá passar a mesma ao seu cliente que deseja alugar o grupo: *${prefix}gerarcoderent (558298.../dias)*, de forma rápida e complexa o grupo será ativado em segundos.
—
*8.* Este comando deleta o código gerado por você, ou seja, no tópico 7 é adicionar o código na lista de ativação do grupo, mas ele não desativa o aluguel no grupo, isso você vê no tópico 3: *${prefix}delcoderent (código)*
—
*9.* De acordo com o tópico que fala sobre a cortesia, que seria o uso do bot liberado por 24h no grupo aonde foi disponibilizado, este comando é praticamente a mesma funcionalidade de gerar o código fixo de aluguel, o comando: *${prefix}gerarcodecort*
—
*10.* O comando *${prefix}savegp* serve para ativar o grupo, sem a necessidade de registrar o aluguel no grupo aonde usar...
—
Dúvidas? Entre em contato com criador do bot, para esclarecer suas dúvidas. Beijinhos do Gab's, amo vocês! <3`
}

exports.infoPremium = (prefix) => {
return `• INFORMAÇÕES SOBRE O PREMIUM:
–
O sistema de premium foi atualizado, agora você pode definir o tempo que a pessoa atua como usuário premium e também é claro nós não esquecemos de colocar com os dias infinitos sem limite! *Leia abaixo:*
–
~ O comando *1.1* ele é liberado a todos os usuários, já o *1.2* não é:
–
*1.1)* Para consultar o tempo de expiração ou até mesmo se está na lista do mesmo, a partir do comando: *${prefix}consultar_premium*
–
*1.2)* O comando ${prefix}premiumlist é disponibilizado a todos os usuários da lista, então os premium pode consultar todos os usuários que estão na lista também.
–
~ Lembre-se que os comandos abaixo, somente o(a) proprietário(a) pode utilizar:
–
*2.1)* Comando: ${prefix}Addpremium @mencione-número/quantidade - Adiciona a pessoa da lista de usuários premiuns.
↳ Explicando para o leigos é para mencionar o usuário no grupo ou colocar o número da pessoa que você deseja executa a ação. Exemplo do número 558288279194, já mencionando você deve usar no grupo pois no pv não possível mencionar usuário... Já a quantidade, são os dias que você quer colocar para usuário ficar como premium, se colocar 30, será 30 dias, se colocar 0 o usuário(a) será agraciado com o infinito sem validade de expiração.
–
*2.2)* Comando: ${prefix}Delpremium @mencione-número - Remove a pessoa da lista de usuários premiuns.
↳ Nessa parte é somente o número ou @ da pessoa, caso esteja no grupo é claro. Se estiver no pv é o número sem o @... Como você viu no exemplo 2.1, já sabe né?
–
Entendeu? =) Dúvidas entre em contato com criador do bot, ele poderá está lhe ajudando.`
}

exports.infoCmdPremium = (prefix) => {
return `• INFORMAÇÕES SOBRE OS COMANDOS PREMIUM:
–
Adicione e remova seus próprios comandos da lista, para somente aqueles que atuam como premium no momento usarem... Lembrando que somente o(a) proprietário(a), pode usar estes comandos, beijos!

*1.1)* Para adicionar o comando, você deve usar esse: ${prefix}addcmdprem comando
↳ Você deve olhar o menu principal, entre os outros menus e escolha os comandos... Depois disso você dá o comando acima, para colocar ele na lista, mas deve-se se lembrar escreva do jeito que está no menu.
–
*1.2)* Para remover o comando do uso somente para os usuários premium, use: ${prefix}delcmdprem comando
↳ Este comando só irá remover da lista falada acima. Automaticamente, o comando é apagado do ${prefix}menupremium e do ${prefix}cmdpremlist.
–
*1.3)* Conferir os comandos que estão atualmente na lista, use: ${prefix}cmdpremlist
↳ Este comando vai lhe informar todos os comandos que estão na lista atualmente. Lembrando que todos os usuários podem usar este comando...`
}