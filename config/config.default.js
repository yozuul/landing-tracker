const server = {
  url: 'http://localhost',
  port: '3000'
}

const db = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'cx14726_nodejs',
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

const cURL = 'https://site.ru/admin/getrequest.php?param=1 '

export { db, server, tables, cURL }