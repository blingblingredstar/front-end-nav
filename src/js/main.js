const getState = () => {
  const defaultState = [
    {
      logo: {
        type: 'String',
        content: '哔',
      },
      url: 'https://www.bilibili.com/',
      name: '哔哩哔哩',
    },
    {
      logo: {
        type: 'String',
        content: '知',
      },
      url: 'https://www.zhihu.com/',
      name: '知乎',
    },
    {
      logo: {
        type: 'String',
        content: 'B',
      },
      url: 'https://www.bilibili.com/',
      name: 'bilibili.com',
    },
    {
      logo: {
        type: 'String',
        content: 'B',
      },
      url: 'https://www.bilibili.com/',
      name: 'bilibili.com',
    },
    {
      logo: {
        type: 'String',
        content: 'B',
      },
      url: 'https://www.bilibili.com/',
      name: 'bilibili.com',
    },
  ]
  const state = JSON.parse(localStorage.getItem('state'))

  if (Array.isArray(state)) {
    return state
  } else {
    return defaultState
  }
}

const setState = (newState) => {
  localStorage.setItem('state', JSON.stringify(newState))
  render(newState)
}

const render = (state) => {
  $('.site-list')
    .find('li:not(.site-add)')
    .remove()
  const $siteAdd = $('.site-add')
  state.forEach((item, index) => {
    const $li = $(`<li class="site-item" data-index="${index}">
        <a href="${item.url}">
          <div class="site-logo">
            ${
              item.logo.type === 'String'
                ? item.logo.content
                : `<img src="${item.logo.content}" alt="${item.name}" class="site-logo-img"/>`
            }
          </div>
          <div class="site-name">${item.name}</div>
        </a>
        <div class="site-item-close">
          <svg
            t="1572014249855"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2878"
       
          >
            <path
              d="M515.236 491.069l-136.96-136.96a17.092 17.092 0 1 0-24.18 24.155l136.961 136.972-136.96 136.972a17.092 17.092 0 1 0 24.167 24.167l136.972-136.96 136.972 136.96a17.092 17.092 0 1 0 24.167-24.156l-136.96-136.983 136.96-136.96a17.092 17.092 0 1 0-24.167-24.168l-136.96 136.96z"
              p-id="2879"
            ></path>
          </svg>
        </div>
      </li>`)
    $li.insertBefore($siteAdd)
  })
  $('.site-item-close').on('click', deleteSite)
}

const showModal = () => {
  // 锁定页面位置，禁止滚动
  const tops = $(document).scrollTop()
  $(document).bind('scroll', function() {
    $(document).scrollTop(tops)
  })
  //
  $('.modal-form')
  $('.modal')
    .css('margin-top', window.pageYOffset + 'px')
    .removeClass('closed')
}

const closeModal = () => {
  $(document).unbind('scroll')

  $('.modal').addClass('closed')
}

const addSite = () => {
  showModal()
  $('.modal-btn').on('click', (e) => {
    e.stopPropagation()
    const url = $('.modal-input-url').val()
    const name = $('.modal-input-name').val()

    const newItem = {
      logo: {
        type: 'String',
        content: name[0].toLocaleUpperCase(),
      },
      url,
      name,
    }
    const state = getState()
    const newState = state.concat([newItem])
    setState(newState)

    $('.modal-input-url').val('')
    $('.modal-input-name').val('')

    closeModal()
  })

  $('.modal-close').on('click', closeModal)
}

function deleteSite() {
  const index = $(this)
    .parent()
    .data('index')

  const state = getState()
  state.splice(index, 1)
  setState(state)
}

$('.site-add').on('click', addSite)

render(getState())
