LOI = LandsOfIllusions
PAA = PixelArtAcademy
Artwork = PAA.Artworks.Artwork

Meteor.methods
  artworkInsert: (artworkId) ->
    check artworkId, Match.Optional Match.DocumentId
    LOI.authorizeAdmin()

    # We create a new artwork for the given character.
    Artwork.documents.insert Artwork.defaultData()

  artworkUpdate: (artworkId, update, options) ->
    check artworkId, Match.DocumentId
    check update, Object
    check options, Match.Optional Object
    LOI.authorizeAdmin()

    Artwork.documents.update artworkId, update, options

  artworkRemove: (artworkId) ->
    check artworkId, Match.Optional Match.DocumentId
    LOI.authorizeAdmin()

    Artwork.documents.remove artworkId
