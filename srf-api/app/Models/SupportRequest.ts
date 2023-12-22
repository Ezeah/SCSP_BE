import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class SupportRequest extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({columnName: 'user_id'})
  public user_id: number

  @column()
  public first_name: string

  @column()
  public last_name: string

  @column()
  public email: string

  @column()
  public support_message_title: string

  @column()
  public support_message_text: string

  @column()
  public file: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}



