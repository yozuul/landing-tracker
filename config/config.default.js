const server = {
  url: 'https://node.ogon-ok.ru'
}

const cURL = {
  click: 'https://formularoi.com/admin100/getrequest.php?param=4',
  visit: 'https://formularoi.com/admin100/getrequest.php?param=5',
}

const db = {
  host: 'bitrix288.timeweb.ru',
  user: 'cx14726_nodejs',
  password: 'nRxge7jckk9B8dW',
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

export { db, server, tables, cURL }