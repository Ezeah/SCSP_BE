import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany  } from '@ioc:Adonis/Lucid/Orm'
import SupportRequest from 'App/Models/SupportRequest'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public full_name: string

  @column()
  public email: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => SupportRequest, {
    foreignKey: 'user_id', 
    localKey: 'id'
  })
  public supportRequests: HasMany<typeof SupportRequest>
}
