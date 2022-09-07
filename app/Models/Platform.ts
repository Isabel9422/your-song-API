import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import Song from './Song'

export default class Platform extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nombre: string

  @column()
  public url: string

  @manyToMany(() => Song, {
    pivotTable: 'platforms_songs',
    pivotTimestamps: true,
  })
  public songs: ManyToMany<typeof Song>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
