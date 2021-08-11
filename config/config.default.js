const server = {
  url: 'https://donor-domain.ru'
}

const cURL = {
  click: 'https://main-domain.ru/admin100/getrequest.php?param=4',
  visit: 'https://main-domain.ru/admin100/getrequest.php?param=5',
}

const db = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'database_name',
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