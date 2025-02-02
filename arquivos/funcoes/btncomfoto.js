async function btncomfoto(jid, text = "a", title = "b", subtitle = "c", footer = "d", media, mediaType, quoted, options, buttons) {

        if (!jid) throw new Error("precisa do jid")

        if (typeof jid !== "string") throw new TypeError("jid tem que ser uma string")

        if (typeof text !== "string") throw new TypeError("text tem que ser uma string")

        if (typeof title !== "string") throw new TypeError("title tem que ser uma string")

        if (typeof footer !== "string") throw new TypeError("footer tem que ser uma string")

        if (media && typeof mediaType !== "string") throw new TypeError("mediaType  tem que ser uma string")

        if (quoted && typeof quoted !== "object") throw new TypeError("quoted tem que ser um objeto")

        if (options && typeof options !== "object") throw new TypeError("options tem que ser um objeto")

        if (mediaType && !["document", "image", "video"].includes(mediaType)) throw new TypeError("mediaType invalido, formatos suportados: image, video, document")

        quoted = { ...quoted }

        options = { ...options }

        const contextInfo = {

          mentionedJid: Array.isArray(options.mentions) ? options.mentions : [],

          ...options.contextInfo,

          stanzaId: quoted.key?.id,

          remoteJid: quoted.key?.remoteJid,

          participant: quoted.key?.participant,

          fromMe: quoted.key?.fromMe,

          quotedMessage: quoted.message

        }

        delete options.contextInfo

        const msg = baileys.generateWAMessageFromContent(jid, {

          interactiveMessage: baileys.proto.Message.InteractiveMessage.create({

            body: baileys.proto.Message.InteractiveMessage.Body.create({

              text

            }),

            footer: baileys.proto.Message.InteractiveMessage.Footer.create({

              text: footer

            }),

            header: baileys.proto.Message.InteractiveMessage.Header.create({

              title,

              subtitle,

              hasMediaAttachment: !!media,

              ...(media && mediaType ? await baileys.generateWAMessageContent({ [mediaType]: media }, { upload: mai.waUploadToServer }) : {})

            }),

            nativeFlowMessage: baileys.proto.Message.InteractiveMessage.NativeFlowMessage.create({

              buttons: buttons

            }),

            contextInfo

          })

        }, {})

        await mai.relayMessage(msg.key.remoteJid, msg.message, {

          messageId: msg.key.id

        })

        return msg

      }

module.exports = { btncomfoto };