/**
 * Mocking client-server processing
 */

import PouchDB from 'pouchdb-browser'
PouchDB.plugin(require('pouchdb-find'))
let db = new PouchDB('AdvoBase')

export default {
  /* Récupérer l'instance de connexion à la base de donnée */
  getDb () {
    return db
  },
  /* Récupérer tout les documents d'un type choisis, si attachment est a false,
     les fichier ( images ) ne seront pas récupéré
   */
  getAll (documentType, attachment, cb) {
    db.allDocs({
      startkey: documentType,
      endkey: documentType + '\uffff',
      include_docs: true,
      attachments: attachment
    })
      .then(function (result) {
        var doc = result.rows.map(
          function (row) {
            var doc = row.doc
            /* console.log(doc) */
            return (doc)
          })
        cb(doc)
      })
      .catch(function (err) {
        console.log(err)
      })
  },
  /*
  ajouter un document
   */
  add (doc, cb) {
    console.log(doc)
    db.put(doc)
      .then(function () { cb() })
      .catch(function (err) {
        console.log(err)
      })
  },
  /* récupérer un document grace à son id ainsi qu'à des attributs specifié */
  get (id, attributes, cb, cberror) {
    db.get(id, attributes)
      .then(function (result) {
        var doc = null
        if (result.rows !== undefined) {
          doc = result.rows.map(
            function (row) {
              var doc = row.doc
              return (doc)
            })
        } else {
          doc = result
        }
        cb(doc)
      })
      .catch(function (err) {
        console.log(err)
        cberror(err)
      })
  },
  /* récupérr un document en specifiant des conditions spécifique ( plus lent mais plus précis */
  getBy (properties, condition, cb) {
    db.createIndex({
      index: {fields: properties}
    }).then(function () {
      return db.find(condition)
    }).then(function (doc) {
      cb(doc.docs)
    })
  },
  /* Supprimer un document */
  delete (doc) {
    if (Array.isArray(doc)) {
      doc.forEach(function (document) {
        db.remove(document)
      })
    } else {
      db.remove(doc)
    }
  },
  /* récupérer un attachment d'un document uniquement ( une image ) */
  getAttachment (id, attachment, cb) {
    db.getAttachment(id, attachment, function (err, blobbuffer) {
      if (err) {
        return console.log(err)
      } else {
        cb(blobbuffer)
      }
    }
    )
  },
  /* ajouter une image à un document */
  putAttachment (id, name, attachment, type, cb) {
    db.get(id, {attachments: true}).then(function (doc) {
      db.putAttachment(doc._id, name, doc._rev, attachment, type).then(function (result) {
        cb(result)
      })
    })
  },
  /* supprimer une image d'un document */
  deleteAttachment (id, name, cb) {
    db.get(id, {attachments: true}).then(function (doc) {
      db.removeAttachment(id, name, doc._rev,
        function (err, res) {
          if (err) {
            return console.log(err)
          } else {
            console.log(res + 'Attachment supprimé')
            cb(res)
          }
        })
    })
  }
}
