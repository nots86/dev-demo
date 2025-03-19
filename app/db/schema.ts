import {pgTable, serial, timestamp, varchar} from "drizzle-orm/pg-core"

export const new_line = pgTable ('new_line', {
    id: serial('id').primaryKey(),
    country: varchar('country', {length:100}).notNull(),
    site: varchar('site', {length:255}).notNull(),
    area: varchar('area', {length:255}).notNull(),
    processCell: varchar('process_cell', {length:255}).notNull(),
    hostName: varchar('hostName', {length:255}).notNull(),
    hardware: varchar('hardware', {length:255}).notNull(),
    dataAccessAdGroup: varchar('data_access_Ad_group', {length:255}).notNull(),
    localSystemManagerAdGroup: varchar('local_system_manager_Ad_group', {length:255}).notNull(),
    
});