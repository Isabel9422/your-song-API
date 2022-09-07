import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import {
  responsiveAttachment,
  ResponsiveAttachmentContract,
} from '@ioc:Adonis/Addons/ResponsiveAttachment'
import Playlist from './Playlist'

export default class Song extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nombre: string

  @responsiveAttachment()
  public image: ResponsiveAttachmentContract

  @manyToMany(() => Playlist, {
    pivotTable: 'songs_playlists',
    pivotTimestamps: true,
  })
  public playlists: ManyToMany<typeof Playlist>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
