const fs = require("fs")

const { prepareWAMessageMedia } = require(`@whiskeysockets/baileys`)

const atraso = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms))};

var botoes = JSON.parse(fs.readFileSync("./settings/nescessario.json")).botoes

var blackchannel = JSON.parse(fs.readFileSync("./settings/nescessario.json")).blackchannel

const sendButton = async(from, dados, miwa, sender, options, info) => {
  try {
    if(botoes) {
      but = []
      for(i of options) {
        if(i.type == `copy_url`) but.push({name: "cta_url", buttonParamsJson: JSON.stringify({display_text: i.text, url: i.url, merchant_url: i.url})})
        if(i.type == `copy_text`) but.push({name: "cta_copy", buttonParamsJson: JSON.stringify({display_text: i.text, copy_code: i.url})})
        if(i.type == `call`) but.push({name: "cta_call", buttonParamsJson: JSON.stringify({display_text: i.text, id: i.url})})
        if(i.type == `cmd`) but.push({name: "quick_reply", buttonParamsJson: JSON.stringify({display_text: i.text, id: i.command, disabled: false})})
        if(i.type == `list` || i.type == `lista`) {
          caixa = []
          for(a of i.rowId) {
            lista = []
            for(b of a.options) {
              lista.push({header: b?.name || ``, title: b?.title || ``, description: b?.body, id: b?.command || ``, disabled: false})
            }
            caixa.push({title: a?.title || ``, highlight_label: a?.body || ``, rows: lista})
          }
          but.push({name: "single_select", buttonParamsJson: JSON.stringify({title: i.title, sections: caixa})})
        }
      }
      if(dados?.text) return miwa.relayMessage(from, {interactiveMessage: {body: {text: dados?.text || ``}, footer: {text: dados?.footer || ``}, contextInfo: {participant: sender, mentionedJid: dados?.mentions, quotedMessage: info ? info.message : ``, forwardingScore: dados?.contextInfo?.forwardingScore || 0, isForwarded: dados?.contextInfo?.isForwarded || false, forwardedNewsletterMessageInfo: {newsletterJid: dados?.contextInfo?.forwardedNewsletterMessageInfo?.newsletterJid || ``, newsletterName: dados?.contextInfo?.forwardedNewsletterMessageInfo?.newsletterName || ``}}, nativeFlowMessage: {buttons: but, messageParamsJson: ""}}}, {})
      if(dados?.image) {
        img = await prepareWAMessageMedia({image: dados?.image}, {upload: miwa.waUploadToServer})
        return miwa.relayMessage(from, {interactiveMessage: {header: {hasMediaAttachment: true, imageMessage: img.imageMessage}, headerType: `IMAGE`, body: {text: dados?.caption || ``}, footer: {text: dados?.footer || ``}, contextInfo: {participant: sender, mentionedJid: dados?.mentions, quotedMessage: info ? info.message : ``, forwardingScore: dados?.contextInfo?.forwardingScore || 0, isForwarded: dados?.contextInfo?.isForwarded || false, forwardedNewsletterMessageInfo: {newsletterJid: dados?.contextInfo?.forwardedNewsletterMessageInfo?.newsletterJid || ``, newsletterName: dados?.contextInfo?.forwardedNewsletterMessageInfo?.newsletterName || ``}}, nativeFlowMessage: {buttons: but, messageParamsJson: ""}}}, {})
      }
      vid = await prepareWAMessageMedia({video: dados?.video}, {upload: miwa.waUploadToServer})
      return miwa.relayMessage(from, {interactiveMessage: {header: {hasMediaAttachment: true, videoMessage: vid.videoMessage}, headerType: `IMAGE`, body: {text: dados?.caption || ``}, footer: {text: dados?.footer || ``}, contextInfo: {participant: sender, mentionedJid: dados?.mentions, quotedMessage: info ? info.message : ``, forwardingScore: dados?.contextInfo?.forwardingScore || 0, isForwarded: dados?.contextInfo?.isForwarded || false, forwardedNewsletterMessageInfo: {newsletterJid: dados?.contextInfo?.forwardedNewsletterMessageInfo?.newsletterJid || ``, newsletterName: dados?.contextInfo?.forwardedNewsletterMessageInfo?.newsletterName || ``}}, nativeFlowMessage: {buttons: but, messageParamsJson: ""}}}, {})
    } else {
      if(dados?.text) return miwa.sendMessage(from, {text: dados?.text, mentions: dados?.mentions, contextInfo: {forwardingScore: dados?.contextInfo?.forwardingScore || 0, isForwarded: dados?.contextInfo?.isForwarded || false, forwardedNewsletterMessageInfo: {newsletterJid: dados?.contextInfo?.forwardedNewsletterMessageInfo?.newsletterJid || ``, newsletterName: dados?.contextInfo?.forwardedNewsletterMessageInfo?.newsletterName || ``}}}, {quoted: info})
      if(dados?.image) return miwa.sendMessage(from, {image: dados?.image, caption: dados?.caption, mentions: dados?.mentions, contextInfo: {forwardingScore: dados?.contextInfo?.forwardingScore || 0, isForwarded: dados?.contextInfo?.isForwarded || false, forwardedNewsletterMessageInfo: {newsletterJid: dados?.contextInfo?.forwardedNewsletterMessageInfo?.newsletterJid || ``, newsletterName: dados?.contextInfo?.forwardedNewsletterMessageInfo?.newsletterName || ``}}}, {quoted: info})
      return miwa.sendMessage(from, {video: dados?.video, caption: dados?.caption, mentions: dados?.mentions, contextInfo: {forwardingScore: dados?.contextInfo?.forwardingScore || 0, isForwarded: dados?.contextInfo?.isForwarded || false, forwardedNewsletterMessageInfo: {newsletterJid: dados?.contextInfo?.forwardedNewsletterMessageInfo?.newsletterJid || ``, newsletterName: dados?.contextInfo?.forwardedNewsletterMessageInfo?.newsletterName || ``}}}, {quoted: info})
    }
  } catch(e) {console.log(e)}
}

const sendListB = async(from, dados, miwa, sender, title, lista, info) => {
  try {
    if(botoes) {
      caixa = []
      for(a of lista) {
        hehe = []
        for(b of a.options) {
          hehe.push({header: b?.name || ``, title: b?.title || ``, description: b?.body, id: b?.command || ``, disabled: false})
        }
        caixa.push({title: a?.title || ``, highlight_label: a?.body || ``, rows: hehe})
      }
      but = [{name: "single_select", buttonParamsJson: JSON.stringify({title: title, sections: caixa})}]
      if(dados?.text) return miwa.relayMessage(from, {interactiveMessage: {body: {text: dados?.text || ``}, footer: {text: dados?.footer || ``}, contextInfo: {participant: sender, mentionedJid: dados?.mentions, quotedMessage: info ? info.message : ``, forwardingScore: dados?.contextInfo?.forwardingScore || 0, isForwarded: dados?.contextInfo?.isForwarded || false, forwardedNewsletterMessageInfo: {newsletterJid: dados?.contextInfo?.forwardedNewsletterMessageInfo?.newsletterJid || ``, newsletterName: dados?.contextInfo?.forwardedNewsletterMessageInfo?.newsletterName || ``}}, nativeFlowMessage: {buttons: but, messageParamsJson: ""}}}, {})
      if(dados?.image) {
        img = await prepareWAMessageMedia({image: dados?.image}, {upload: miwa.waUploadToServer})
        return miwa.relayMessage(from, {interactiveMessage: {header: {hasMediaAttachment: true, imageMessage: img.imageMessage}, headerType: `IMAGE`, body: {text: dados?.caption || ``}, footer: {text: dados?.footer || ``}, contextInfo: {participant: sender, mentionedJid: dados?.mentions, quotedMessage: info ? info.message : ``, forwardingScore: dados?.contextInfo?.forwardingScore || 0, isForwarded: dados?.contextInfo?.isForwarded || false, forwardedNewsletterMessageInfo: {newsletterJid: dados?.contextInfo?.forwardedNewsletterMessageInfo?.newsletterJid || ``, newsletterName: dados?.contextInfo?.forwardedNewsletterMessageInfo?.newsletterName || ``}}, nativeFlowMessage: {buttons: but, messageParamsJson: ""}}}, {})
      }
      vid = await prepareWAMessageMedia({video: dados?.video}, {upload: miwa.waUploadToServer})
      return miwa.relayMessage(from, {interactiveMessage: {header: {hasMediaAttachment: true, videoMessage: vid.videoMessage}, headerType: `IMAGE`, body: {text: dados?.caption || ``}, footer: {text: dados?.footer || ``}, contextInfo: {participant: sender, mentionedJid: dados?.mentions, quotedMessage: info ? info.message : ``, forwardingScore: dados?.contextInfo?.forwardingScore || 0, isForwarded: dados?.contextInfo?.isForwarded || false, forwardedNewsletterMessageInfo: {newsletterJid: dados?.contextInfo?.forwardedNewsletterMessageInfo?.newsletterJid || ``, newsletterName: dados?.contextInfo?.forwardedNewsletterMessageInfo?.newsletterName || ``}}, nativeFlowMessage: {buttons: but, messageParamsJson: ""}}}, {})
    } else {
      if(dados?.text) return miwa.sendMessage(from, {text: dados?.text, mentions: dados?.mentions, contextInfo: {forwardingScore: dados?.contextInfo?.forwardingScore || 0, isForwarded: dados?.contextInfo?.isForwarded || false, forwardedNewsletterMessageInfo: {newsletterJid: dados?.contextInfo?.forwardedNewsletterMessageInfo?.newsletterJid || ``, newsletterName: dados?.contextInfo?.forwardedNewsletterMessageInfo?.newsletterName || ``}}}, {quoted: info})
      if(dados?.image) return miwa.sendMessage(from, {image: dados?.image, caption: dados?.caption, mentions: dados?.mentions, contextInfo: {forwardingScore: dados?.contextInfo?.forwardingScore || 0, isForwarded: dados?.contextInfo?.isForwarded || false, forwardedNewsletterMessageInfo: {newsletterJid: dados?.contextInfo?.forwardedNewsletterMessageInfo?.newsletterJid || ``, newsletterName: dados?.contextInfo?.forwardedNewsletterMessageInfo?.newsletterName || ``}}}, {quoted: info})
      return miwa.sendMessage(from, {video: dados?.video, caption: dados?.caption, mentions: dados?.mentions, contextInfo: {forwardingScore: dados?.contextInfo?.forwardingScore || 0, isForwarded: dados?.contextInfo?.isForwarded || false, forwardedNewsletterMessageInfo: {newsletterJid: dados?.contextInfo?.forwardedNewsletterMessageInfo?.newsletterJid || ``, newsletterName: dados?.contextInfo?.forwardedNewsletterMessageInfo?.newsletterName || ``}}}, {quoted: info})
    }
  } catch(e) {console.log(e)}
}

const sendRoulette = async(from, mai, dados) => {
  try {
    if(botoes) {
      butao = []
      for(i of dados) {
        await atraso(1500)
        if(i?.image) {
          img = await prepareWAMessageMedia({image: i?.image}, {upload: mai.waUploadToServer})
          butao.push({header: {hasMediaAttachment: true, imageMessage: img.imageMessage}, headerType: `IMAGE`, body: {text: i?.caption || ``}, footer: {text: i?.footer || ``}, nativeFlowMessage: {buttons: []}})
        } else if(i?.video) {
          vid = await prepareWAMessageMedia({video: i?.video}, {upload: miwa.waUploadToServer})
          butao.push({header: {hasMediaAttachment: true, videoMessage: vid.videoMessage}, headerType: `IMAGE`, body: {text: i?.caption || ``}, footer: {text: i?.footer || ``}, nativeFlowMessage: {buttons: []}})
        }
      }
      mai.relayMessage(from, {interactiveMessage: {carouselMessage: {cards: butao}}}, {})
    } else {
      for(i of dados) {
        if(i?.image) {
          await atraso(1000)
          miwa.sendMessage(from, {image: i.image, caption: i?.caption || ``})
        } else if(i?.video) {
          await atraso(2500)
          miwa.sendMessage(from, {video: i.video, caption: i?.caption || ``})
        }
      }
    }
  } catch(e) {console.log(e)}
}

const sendPayment = (from, miwa, name, chave, type, quoted) => {
  if(botoes) return miwa.relayMessage(from, {interactiveMessage: {contextInfo: {participant: quoted ? quoted[0] : ``, quotedMessage: quoted ? quoted[1].message : ``}, nativeFlowMessage: {buttons: [{name: "payment_info", buttonParamsJson: JSON.stringify({currency: "BRL", total_amount: {value: 0, offset: 100}, reference_id: "4P9EQKLMR9U", type: "physical-goods", order: {status: "pending", subtotal: {value: 0, offset: 100}, order_type: "ORDER", items: [{name: "", amount: {value: 0, offset: 100}, quantity: 0, sale_amount: {value: 0, offset: 100}}]}, payment_settings: [{type: "pix_static_code", pix_static_code: {merchant_name: name, key: chave, key_type: type}}]})}], messageParamsJson: ""}}}, {})
  return miwa.sendMessage(from, {text: `*Nome:* ${name}\n *Chave:* ${chave}\n *Tipo:* ${type}`}, {quoted: quoted ? quoted[1] : ``})
}

module.exports = { sendButton, sendListB, sendRoulette, sendPayment }