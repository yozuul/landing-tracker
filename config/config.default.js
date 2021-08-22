import {} from 'dotenv/config'

const env = process.env

const server = {
  url: env.SERVER_URL
}

const cURL = {
  click: env.CURL_CLICK,
  visit: env.CURL_VISIT,
}

const db = {
  host: env.DB_HOST,
  user: env.DB_USER,
  password: env.DB_PASS,
  database: env.DB_NAME,
  dialect: 'mysql'
}

const tables = {
  visits: {
    name: 'ps_form_visit',
    fields: {
      id: 'id_form_visit',
      referer: 'referer',
      ip: 'remote',
      date: 'date_add',
    }
  },
  clicks: {
    name: 'ps_form_click',
    fields: {
      id: 'id_form_click',
      referer: 'referer',
      ip: 'remote',
      date: 'date_add',
    }
  },
  fields: {
    name: 'ps_form_click_field',
    fields: {
      id: 'id_form_click_field',
      form_id: 'id_form_click',
      name: 'field_name',
      value: 'field_value',
    }
  }
}

export { db, server, tables, cURL }