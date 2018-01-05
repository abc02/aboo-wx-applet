let swagger = {
  'swagger': '2.0',
  'info': {
    'title': 'beego Test API',
    'description': 'beego has a very cool tools to autogenerate documents for your API',
    'version': '1.0.0',
    'termsOfService': 'http://beego.me/',
    'contact': {
      'email': 'astaxie@gmail.com'
    },
    'license': {
      'name': 'Apache 2.0',
      'url': 'http://www.apache.org/licenses/LICENSE-2.0.html'
    }
  },
  'basePath': '/v1',
  'paths': {
    '/xiedian_admin/AddLineFixingId': {
        'post': {
            'tags': [
                'xiedian_admin'
            ],
            'description': '添加列表设备ID',
            'operationId': 'XiedianAdminController.AddLineFixingId',
            'parameters': [
                {
                    'in': 'formData',
                    'name': 'fixingId',
                    'description': '设备id',
                    'required': true,
                    'type': 'string'
                },
                {
                    'in': 'formData',
                    'name': 'code',
                    'description': 'code',
                    'required': true,
                    'type': 'string'
                }
            ],
            'responses': {
                '200': {
                    'description': '{string} 修改成功'
                }
            }
        }
    },
    '/xiedian_admin/AdminAddAdmin': {
          'post': {
              'tags': [
                  'xiedian_admin'
              ],
              'description': '添加管理员',
              'operationId': 'XiedianAdminController.AdminAddAdmin',
              'parameters': [
                  {
                      'in': 'formData',
                      'name': 'username',
                      'description': '用户名',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'auth',
                      'description': '权限',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'adminId',
                      'description': '管理员id',
                      'type': 'string'
                  },
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{string} add success'
                  }
              }
          }
      },
      '/xiedian_admin/AdminAddCommonweal': {
          'post': {
              'tags': [
                  'xiedian_admin'
              ],
              'description': '添加公益',
              'operationId': 'XiedianAdminController.AdminAddCommonweal',
              'parameters': [
                  {
                      'in': 'formData',
                      'name': 'title',
                      'description': '标题',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'desc',
                      'description': '描述',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'name',
                      'description': '姓名',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'sex',
                      'description': '性别',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'weight',
                      'description': '体重',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'height',
                      'description': '身高',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'hair',
                      'description': '发型',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'address',
                      'description': '地址',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'longitude',
                      'description': '经度',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'latitude',
                      'description': '纬度',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'policeName',
                      'description': '民警姓名',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'policePhone',
                      'description': '民警电话',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'debatableTime',
                      'description': '走失时间 格式：时间戳',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'pic',
                      'description': '照片',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'age',
                      'description': '年龄',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'sharepic',
                      'description': '分享图片',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'birth',
                      'description': '出生年月日 格式：时间戳',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'adminId',
                      'description': '管理员id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'required': true,
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{string} add success!'
                  }
              }
          }
      },
      '/xiedian_admin/AdminAddFixing': {
          'post': {
              'tags': [
                  'xiedian_admin'
              ],
              'description': '添加新设备',
              'operationId': 'XiedianAdminController.AdminAddFixing',
              'parameters': [
                  {
                      'in': 'formData',
                      'name': 'fixingId',
                      'description': '设备Id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'batchId',
                      'description': '批次Id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'sms',
                      'description': 'sms卡号码',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'adminId',
                      'description': '管理员id',
                      'type': 'string'
                  },
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{int}'
                  },
                  '403': {
                      'description': 'body is empty'
                  }
              }
          }
      },
      '/xiedian_admin/AdminAddMessage': {
          'post': {
              'tags': [
                  'xiedian_admin'
              ],
              'description': '添加消息',
              'operationId': 'XiedianAdminController.AdminAddMessage',
              'parameters': [
                  {
                      'in': 'formData',
                      'name': 'title',
                      'description': '标题',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'userId',
                      'description': '用户id',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'content',
                      'description': '详情',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'icon',
                      'description': '图标',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'adminId',
                      'description': '管理员id',
                      'type': 'string'
                  },
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{string} add success'
                  }
              }
          }
      },
      '/xiedian_admin/AdminAddSystemImage': {
          'post': {
              'tags': [
                  'xiedian_admin'
              ],
              'description': '添加系统图片',
              'operationId': 'XiedianAdminController.AdminAddSystemImage',
              'parameters': [
                  {
                      'in': 'formData',
                      'name': 'link',
                      'description': '链接地址',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'adminId',
                      'description': '管理员id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{int}'
                  },
                  '403': {
                      'description': 'body is empty'
                  }
              }
          }
      },
      '/xiedian_admin/AdminDelAdmin': {
          'post': {
              'tags': [
                  'xiedian_admin'
              ],
              'description': '删除管理员',
              'operationId': 'XiedianAdminController.AdminDelAdmin',
              'parameters': [
                  {
                      'in': 'formData',
                      'name': 'id',
                      'description': '删除的id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'adminId',
                      'description': '管理员id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'required': true,
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {}
              }
          }
      },
      '/xiedian_admin/AdminDelCommonweal': {
          'post': {
              'tags': [
                  'xiedian_admin'
              ],
              'description': '后台删除公益',
              'operationId': 'XiedianAdminController.AdminDelCommonweal',
              'parameters': [
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'commonwealId',
                      'description': '公益Id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'adminId',
                      'description': '管理员id',
                      'required': true,
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{string}  删除成功'
                  }
              }
          }
      },
      '/xiedian_admin/AdminDelFeekback': {
          'post': {
              'tags': [
                  'xiedian_admin'
              ],
              'description': '删除反馈信息',
              'operationId': 'XiedianAdminController.AdminDelFeekback',
              'parameters': [
                  {
                      'in': 'formData',
                      'name': 'feekbackId',
                      'description': '反馈id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'adminId',
                      'description': '管理员id',
                      'type': 'string'
                  },
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{string} add success'
                  }
              }
          }
      },
      '/xiedian_admin/AdminDelFixing': {
          'post': {
              'tags': [
                  'xiedian_admin'
              ],
              'description': '删除设备',
              'operationId': 'XiedianAdminController.AdminDelFixing',
              'parameters': [
                  {
                      'in': 'formData',
                      'name': 'fixingId',
                      'description': '设备Id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'adminId',
                      'description': '管理员id',
                      'type': 'string'
                  },
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{int}'
                  },
                  '403': {
                      'description': 'body is empty'
                  }
              }
          }
      },
      '/xiedian_admin/AdminDelMessage': {
          'post': {
              'tags': [
                  'xiedian_admin'
              ],
              'description': '删除消息信息',
              'operationId': 'XiedianAdminController.AdminDelMessage',
              'parameters': [
                  {
                      'in': 'formData',
                      'name': 'messageId',
                      'description': '消息id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'adminId',
                      'description': '管理员id',
                      'type': 'string'
                  },
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{string} add success'
                  }
              }
          }
      },
      '/xiedian_admin/AdminDelSystemImage': {
          'post': {
              'tags': [
                  'xiedian_admin'
              ],
              'description': '删除系统图片',
              'operationId': 'XiedianAdminController.AdminDelSystemImage',
              'parameters': [
                  {
                      'in': 'formData',
                      'name': 'link',
                      'description': '链接地址',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'adminId',
                      'description': '管理员id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{int}'
                  },
                  '403': {
                      'description': 'body is empty'
                  }
              }
          }
      },
      '/xiedian_admin/AdminEditAdmin': {
          'post': {
              'tags': [
                  'xiedian_admin'
              ],
              'description': '修改管理员权限',
              'operationId': 'XiedianAdminController.AdminEditAdmin',
              'parameters': [
                  {
                      'in': 'formData',
                      'name': 'id',
                      'description': '手机号',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'auth',
                      'description': '权限',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'adminId',
                      'description': '管理员id'
                  },
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{string} add success'
                  }
              }
          }
      },
      '/xiedian_admin/AdminEditAdminPwd': {
          'post': {
              'tags': [
                  'xiedian_admin'
              ],
              'description': '重置管理员密码',
              'operationId': 'XiedianAdminController.AdminEditAdminPwd',
              'parameters': [
                  {
                      'in': 'formData',
                      'name': 'id',
                      'description': '修改的id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'adminId',
                      'description': '管理员id',
                      'type': 'string'
                  },
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{string} add success'
                  }
              }
          }
      },
      '/xiedian_admin/AdminEditFixingPwd': {
          'post': {
              'tags': [
                  'xiedian_admin'
              ],
              'description': '重置设备密码',
              'operationId': 'XiedianAdminController.AdminEditFixingPwd',
              'parameters': [
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'adminId',
                      'description': '管理员id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'fixingId',
                      'description': '设备id',
                      'required': true,
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{string} 修改成功'
                  }
              }
          }
      },
      '/xiedian_admin/AdminEditPassword': {
          'post': {
              'tags': [
                  'xiedian_admin'
              ],
              'description': '修改管理员密码',
              'operationId': 'XiedianAdminController.AdminEditPassword',
              'parameters': [
                  {
                      'in': 'formData',
                      'name': 'adminId',
                      'description': '管理员id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'oldPassword',
                      'description': '用户原密码',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'newPassword',
                      'description': '用户新密码',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'required': true,
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{string} update success!'
                  }
              }
          }
      },
      '/xiedian_admin/AdminGetAdmin': {
          'post': {
              'tags': [
                  'xiedian_admin'
              ],
              'description': '获取管理员',
              'operationId': 'XiedianAdminController.AdminGetAdmin',
              'parameters': [
                  {
                      'in': 'formData',
                      'name': 'id',
                      'description': '修改的id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'adminId',
                      'description': '管理员id',
                      'type': 'string'
                  },
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{string} add success'
                  }
              }
          }
      },
      '/xiedian_admin/AdminGetAdminCount': {
          'post': {
              'tags': [
                  'xiedian_admin'
              ],
              'description': '后台获取管理员总数',
              'operationId': 'XiedianAdminController.AdminGetAdminCount',
              'parameters': [
                  {
                      'in': 'formData',
                      'name': 'adminId',
                      'description': '管理员id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'seach',
                      'description': '搜索值',
                      'type': 'string'
                  },
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'required': true,
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {}
              }
          }
      },
      '/xiedian_admin/AdminGetAdminList': {
          'post': {
              'tags': [
                  'xiedian_admin'
              ],
              'description': '后台获取管理员列表',
              'operationId': 'XiedianAdminController.AdminGetAdminList',
              'parameters': [
                  {
                      'in': 'formData',
                      'name': 'adminId',
                      'description': '管理员id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'start',
                      'description': '开始',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'limit',
                      'description': '数量',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'sidx',
                      'description': '排序字段',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'sord',
                      'description': '排序值',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'seach',
                      'description': '搜索值',
                      'type': 'string'
                  },
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'required': true,
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {}
              }
          }
      },
      '/xiedian_admin/AdminGetCommonwealCount': {
          'post': {
              'tags': [
                  'xiedian_admin'
              ],
              'description': '后台获取公益总数',
              'operationId': 'XiedianAdminController.AdminGetCommonwealCount',
              'parameters': [
                  {
                      'in': 'formData',
                      'name': 'adminId',
                      'description': '管理员id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'seach',
                      'description': '搜索值',
                      'type': 'string'
                  },
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'required': true,
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {}
              }
          }
      },
      '/xiedian_admin/AdminGetCommonwealDetail': {
          'post': {
              'tags': [
                  'xiedian_admin'
              ],
              'description': '后台获取公益详情',
              'operationId': 'XiedianAdminController.AdminGetCommonwealDetail',
              'parameters': [
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'commonwealId',
                      'description': '公益Id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'adminId',
                      'description': '管理员id',
                      'required': true,
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{string}  获取成功'
                  }
              }
          }
      },
      '/xiedian_admin/AdminGetCommonwealList': {
          'post': {
              'tags': [
                  'xiedian_admin'
              ],
              'description': '后台获取公益列表',
              'operationId': 'XiedianAdminController.AdminGetCommonwealList',
              'parameters': [
                  {
                      'in': 'formData',
                      'name': 'adminId',
                      'description': '管理员id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'start',
                      'description': '开始',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'limit',
                      'description': '数量',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'sidx',
                      'description': '排序字段',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'sord',
                      'description': '排序值',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'seach',
                      'description': '搜索值',
                      'type': 'string'
                  },
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'required': true,
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {}
              }
          }
      },
      '/xiedian_admin/AdminGetFeedbackList': {
          'post': {
              'tags': [
                  'xiedian_admin'
              ],
              'description': '后台获取反馈列表',
              'operationId': 'XiedianAdminController.AdminGetFeedbackList',
              'parameters': [
                  {
                      'in': 'formData',
                      'name': 'adminId',
                      'description': '管理员id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'start',
                      'description': '开始',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'limit',
                      'description': '数量',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'sidx',
                      'description': '排序字段',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'sord',
                      'description': '排序值',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'seach',
                      'description': '搜索值',
                      'type': 'string'
                  },
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'required': true,
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {}
              }
          }
      },
      '/xiedian_admin/AdminGetFixingCount': {
          'post': {
              'tags': [
                  'xiedian_admin'
              ],
              'description': '后台获取设备总数',
              'operationId': 'XiedianAdminController.AdminGetFixingCount',
              'parameters': [
                  {
                      'in': 'formData',
                      'name': 'adminId',
                      'description': '管理员id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'seach',
                      'description': '搜索值',
                      'type': 'string'
                  },
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'required': true,
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {}
              }
          }
      },
      '/xiedian_admin/AdminGetFixingList': {
          'post': {
              'tags': [
                  'xiedian_admin'
              ],
              'description': '后台获取设备列表',
              'operationId': 'XiedianAdminController.AdminGetFixingList',
              'parameters': [
                  {
                      'in': 'formData',
                      'name': 'adminId',
                      'description': '管理员id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'start',
                      'description': '开始',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'limit',
                      'description': '数量',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'sidx',
                      'description': '排序字段',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'sord',
                      'description': '排序值',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'seach',
                      'description': '搜索值',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'state',
                      'description': '设备状态：1、未激活；2、激活；3、丢失',
                      'type': 'string'
                  },
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'required': true,
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {}
              }
          }
      },
      '/xiedian_admin/AdminGetFixingQRCode': {
          'post': {
              'tags': [
                  'xiedian_admin'
              ],
              'description': '获取二维码',
              'operationId': 'XiedianAdminController.AdminGetFixingQRCode',
              'parameters': [
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'adminId',
                      'description': '管理员id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'fixingId',
                      'description': '设备id',
                      'required': true,
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{string} 获取成功'
                  }
              }
          }
      },
      '/xiedian_admin/AdminGetFixinginfo': {
          'post': {
              'tags': [
                  'xiedian_admin'
              ],
              'description': '后台获取设备绑定列表',
              'operationId': 'XiedianAdminController.AdminGetFixinginfo',
              'parameters': [
                  {
                      'in': 'formData',
                      'name': 'adminId',
                      'description': '管理员id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'fixingId',
                      'description': '设备Id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'required': true,
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {}
              }
          }
      },
      '/xiedian_admin/AdminGetLastPosition': {
          'post': {
              'tags': [
                  'xiedian_admin'
              ],
              'description': '获取设备最近一次定位',
              'operationId': 'XiedianAdminController.AdminGetLastPosition',
              'parameters': [
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'adminId',
                      'description': '管理员id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'fixingId',
                      'description': '设备id',
                      'required': true,
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{string} data'
                  }
              }
          }
      },
      '/xiedian_admin/AdminGetLaunchPage': {
          'get': {
              'tags': [
                  'xiedian_admin'
              ],
              'description': '得到启动页',
              'operationId': 'XiedianAdminController.AdminGetLaunchPage',
              'responses': {
                  '200': {}
              }
          }
      },
      '/xiedian_admin/AdminGetMessageCount': {
          'post': {
              'tags': [
                  'xiedian_admin'
              ],
              'description': '后台获取消息总数',
              'operationId': 'XiedianAdminController.AdminGetMessageCount',
              'parameters': [
                  {
                      'in': 'formData',
                      'name': 'adminId',
                      'description': '管理员id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'seach',
                      'description': '搜索值',
                      'type': 'string'
                  },
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'required': true,
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {}
              }
          }
      },
      '/xiedian_admin/AdminGetMessageList': {
          'post': {
              'tags': [
                  'xiedian_admin'
              ],
              'description': '后台获取消息列表',
              'operationId': 'XiedianAdminController.AdminGetMessageList',
              'parameters': [
                  {
                      'in': 'formData',
                      'name': 'adminId',
                      'description': '管理员id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'start',
                      'description': '开始',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'limit',
                      'description': '数量',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'sidx',
                      'description': '排序字段',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'sord',
                      'description': '排序值',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'seach',
                      'description': '搜索值',
                      'type': 'string'
                  },
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'required': true,
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {}
              }
          }
      },
      '/xiedian_admin/AdminGetTrackList': {
          'post': {
              'tags': [
                  'xiedian_admin'
              ],
              'description': '获取指定时间戳内的轨迹(文字列表)',
              'operationId': 'XiedianAdminController.AdminGetTrackList',
              'parameters': [
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'adminId',
                      'description': '管理员id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'fixingId',
                      'description': '设备id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'time',
                      'description': '开始日期 格式：2006-01-02',
                      'required': true,
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{string} data'
                  }
              }
          }
      },
      '/xiedian_admin/AdminGetUserCount': {
          'post': {
              'tags': [
                  'xiedian_admin'
              ],
              'description': '后台获取用户总数',
              'operationId': 'XiedianAdminController.AdminGetUserCount',
              'parameters': [
                  {
                      'in': 'formData',
                      'name': 'adminId',
                      'description': '管理员id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'seach',
                      'description': '搜索值',
                      'type': 'string'
                  },
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'required': true,
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {}
              }
          }
      },
      '/xiedian_admin/AdminGetUserList': {
          'post': {
              'tags': [
                  'xiedian_admin'
              ],
              'description': '后台获取用户列表',
              'operationId': 'XiedianAdminController.AdminGetUserList',
              'parameters': [
                  {
                      'in': 'formData',
                      'name': 'adminId',
                      'description': '管理员id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'start',
                      'description': '开始',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'limit',
                      'description': '数量',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'sidx',
                      'description': '排序字段',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'sord',
                      'description': '排序值',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'seach',
                      'description': '搜索值',
                      'type': 'string'
                  },
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'required': true,
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {}
              }
          }
      },
      '/xiedian_admin/AdminGetUserinfo': {
          'post': {
              'tags': [
                  'xiedian_admin'
              ],
              'description': '获取指定用户详情',
              'operationId': 'XiedianAdminController.AdminGetUserinfo',
              'parameters': [
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'adminId',
                      'description': '管理员id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'userId',
                      'description': '用户id',
                      'required': true,
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{string} data'
                  }
              }
          }
      },
      '/xiedian_admin/AdminGetfeedbackCount': {
          'post': {
              'tags': [
                  'xiedian_admin'
              ],
              'description': '后台获取反馈总数',
              'operationId': 'XiedianAdminController.AdminGetfeedbackCount',
              'parameters': [
                  {
                      'in': 'formData',
                      'name': 'adminId',
                      'description': '管理员id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'seach',
                      'description': '搜索值',
                      'type': 'string'
                  },
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'required': true,
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {}
              }
          }
      },
      '/xiedian_admin/AdminHome': {
          'post': {
              'tags': [
                  'xiedian_admin'
              ],
              'description': '首页展示',
              'operationId': 'XiedianAdminController.AdminHome',
              'parameters': [
                  {
                      'in': 'formData',
                      'name': 'adminId',
                      'description': '管理员id',
                      'type': 'string'
                  },
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{string} add success'
                  }
              }
          }
      },
      '/xiedian_admin/AdminLoginAccount': {
          'post': {
              'tags': [
                  'xiedian_admin'
              ],
              'description': '账号登录',
              'operationId': 'XiedianAdminController.AdminLoginAccount',
              'parameters': [
                  {
                      'in': 'formData',
                      'name': 'username',
                      'description': '手机号',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'password',
                      'description': '密码',
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{int}'
                  },
                  '403': {
                      'description': 'body is empty'
                  }
              }
          }
      },
      '/xiedian_admin/AdminLoginForBaidu': {
          'post': {
              'tags': [
                  'xiedian_admin'
              ],
              'description': '鹰眼登入',
              'operationId': 'XiedianAdminController.AdminLoginForBaidu',
              'parameters': [
                  {
                      'in': 'formData',
                      'name': 'username',
                      'description': '手机号',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'password',
                      'description': '密码',
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{int}'
                  },
                  '403': {
                      'description': 'body is empty'
                  }
              }
          }
      },
      '/xiedian_admin/AdminReplyFeekback': {
          'post': {
              'tags': [
                  'xiedian_admin'
              ],
              'description': '回复反馈信息',
              'operationId': 'XiedianAdminController.AdminReplyFeekback',
              'parameters': [
                  {
                      'in': 'formData',
                      'name': 'feekbackId',
                      'description': '反馈id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'fcontent',
                      'description': '反馈内容',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'adminId',
                      'description': '管理员id',
                      'type': 'string'
                  },
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{string} add success'
                  }
              }
          }
      },
      '/xiedian_admin/AdminSetCommonwealFinish': {
          'post': {
              'tags': [
                  'xiedian_admin'
              ],
              'description': '后台完成公益',
              'operationId': 'XiedianAdminController.AdminSetCommonwealFinish',
              'parameters': [
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'commonwealId',
                      'description': '公益Id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'content',
                      'description': '已结案详情',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'adminId',
                      'description': '管理员id',
                      'required': true,
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{string}  修改成功'
                  }
              }
          }
      },
      '/xiedian_admin/AdminStatisticsFixingData': {
          'post': {
              'tags': [
                  'xiedian_admin'
              ],
              'description': '统计用户数据',
              'operationId': 'XiedianAdminController.AdminStatisticsFixingData',
              'parameters': [
                  {
                      'in': 'formData',
                      'name': 'adminId',
                      'description': '管理员id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'time',
                      'description': '年月',
                      'required': true,
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{int}'
                  },
                  '403': {
                      'description': 'body is empty'
                  }
              }
          }
      },
      '/xiedian_admin/AdminStatisticsUserData': {
          'post': {
              'tags': [
                  'xiedian_admin'
              ],
              'description': '统计用户数据',
              'operationId': 'XiedianAdminController.AdminStatisticsUserData',
              'parameters': [
                  {
                      'in': 'formData',
                      'name': 'adminId',
                      'description': '管理员id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'time',
                      'description': '年月',
                      'required': true,
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{int}'
                  },
                  '403': {
                      'description': 'body is empty'
                  }
              }
          }
      },
      '/xiedian_admin/AdminUpdateCommonweal': {
          'post': {
              'tags': [
                  'xiedian_admin'
              ],
              'description': '修改公益',
              'operationId': 'XiedianAdminController.AdminUpdateCommonweal',
              'parameters': [
                  {
                      'in': 'formData',
                      'name': 'commonwealId',
                      'description': '公益Id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'desc',
                      'description': '描述',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'sex',
                      'description': '性别',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'weight',
                      'description': '体重',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'height',
                      'description': '身高',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'hair',
                      'description': '发型',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'address',
                      'description': '地址',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'longitude',
                      'description': '经度',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'latitude',
                      'description': '纬度',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'policeName',
                      'description': '民警姓名',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'policePhone',
                      'description': '民警电话',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'debatableTime',
                      'description': '走失时间 格式：时间戳',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'pic',
                      'description': '照片',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'age',
                      'description': '年龄',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'sharepic',
                      'description': '分享图片',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'content',
                      'description': '结案内容',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'status',
                      'description': '公益状态',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'birth',
                      'description': '出生年月日 格式：时间戳',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'adminId',
                      'description': '管理员id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'required': true,
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{string} update success!'
                  }
              }
          }
      },
      '/xiedian_admin/AdminUpdateLaunchPage': {
          'post': {
              'tags': [
                  'xiedian_admin'
              ],
              'description': '修改启动页',
              'operationId': 'XiedianAdminController.AdminUpdateLaunchPage',
              'parameters': [
                  {
                      'in': 'formData',
                      'name': 'adminId',
                      'description': '管理员id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'link',
                      'description': '启动页链接',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'required': true,
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {}
              }
          }
      },
      '/xiedian_admin/AdminUpdateUserStatusInfo': {
          'post': {
              'tags': [
                  'xiedian_admin'
              ],
              'description': '操作用户拉黑状态',
              'operationId': 'XiedianAdminController.AdminUpdateUserStatusInfo',
              'parameters': [
                  {
                      'in': 'formData',
                      'name': 'adminId',
                      'description': '管理员id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'userId',
                      'description': '用户id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'userStatus',
                      'description': '2拉黑1恢复',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'required': true,
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{string} update success!'
                  }
              }
          }
      },
      '/xiedian_admin/EditFixingStarting': {
          'post': {
              'tags': [
                  'xiedian_admin'
              ],
              'description': '修改设备信息-设备开机状态  \t\tisStarting 0：关机；1：开机',
              'operationId': 'XiedianAdminController.EditFixingStarting',
              'parameters': [
                  {
                      'in': 'formData',
                      'name': 'fixingId',
                      'description': '设备id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'isStarting',
                      'description': '是否开机',
                      'required': true,
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{string} 修改成功'
                  }
              }
          }
      },
      '/xiedian_admin/GetFixingCode': {
          'post': {
              'tags': [
                  'xiedian_admin'
              ],
              'description': '获取操作命令',
              'operationId': 'XiedianAdminController.GetFixingCode',
              'parameters': [
                  {
                      'in': 'formData',
                      'name': 'fixingId',
                      'description': '设备Id',
                      'required': true,
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{int}'
                  },
                  '403': {
                      'description': 'body is empty'
                  }
              }
          }
      },
      '/xiedian_admin/GetLineFixingId': {
          'post': {
              'tags': [
                  'xiedian_admin'
              ],
              'description': '获取列表设备ID',
              'operationId': 'XiedianAdminController.GetLineFixingId',
              'parameters': [
                  {
                      'in': 'formData',
                      'name': 'fixingId',
                      'description': '设备id',
                      'required': true,
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{string} 修改成功'
                  }
              }
          }
      },
      '/xiedian_admin/GetServiceId': {
          'post': {
              'tags': [
                  'xiedian_admin'
              ],
              'description': '获取列表设备ID',
              'operationId': 'XiedianAdminController.GetServiceId',
              'parameters': [
                  {
                      'in': 'formData',
                      'name': 'fixingId',
                      'description': '设备id',
                      'required': true,
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{string} 修改成功'
                  }
              }
          }
      },
      '/xiedian_admin/MessageSend': {
          'post': {
              'tags': [
                  'xiedian_admin'
              ],
              'description': '进出围栏发送短信提醒',
              'operationId': 'XiedianAdminController.MessageSend',
              'parameters': [
                  {
                      'in': 'formData',
                      'name': 'fixingId',
                      'description': '设备id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'fenceName',
                      'description': '围栏名称',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'style',
                      'description': '围栏状态 type 0：离开:1：进入',
                      'required': true,
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{string} 修改成功'
                  }
              }
          }
      },
      '/xiedian_admin/SendMessage': {
          'post': {
              'tags': [
                  'xiedian_admin'
              ],
              'description': '发送信息',
              'operationId': 'XiedianAdminController.SendMessage',
              'parameters': [
                  {
                      'in': 'formData',
                      'name': 'title',
                      'description': '消息标题',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'content',
                      'description': '消息内容',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'fixingId',
                      'description': '设备Id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'electricity',
                      'description': '电量百分比',
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{int}'
                  },
                  '403': {
                      'description': 'body is empty'
                  }
              }
          }
      },
      '/xiedian_admin/UpdateFixingModetoUrgent': {
          'post': {
              'tags': [
                  'xiedian_admin'
              ],
              'description': '修改设备信息-修改设备状态到紧急',
              'operationId': 'XiedianAdminController.UpdateFixingModetoUrgent',
              'parameters': [
                  {
                      'in': 'formData',
                      'name': 'fixingId',
                      'description': '设备id',
                      'required': true,
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{string} 修改成功'
                  }
              }
          }
      },
      '/xiedian_commonweal/GetCommonwealList': {
          'post': {
              'tags': [
                  'xiedian_commonweal'
              ],
              'description': '获取-公益信息列表',
              'operationId': 'XiedianCommonwealController.GetCommonwealList',
              'parameters': [
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'limit',
                      'description': '分页数量',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'userId',
                      'description': '用户id',
                      'required': true,
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{string}  获取成功'
                  }
              }
          }
      },
      '/xiedian_commonweal/GetCommonwealdetail': {
          'post': {
              'tags': [
                  'xiedian_commonweal'
              ],
              'description': '获取-公益信息详情',
              'operationId': 'XiedianCommonwealController.GetCommonwealdetail',
              'parameters': [
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'commonwealId',
                      'description': '公益Id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'userId',
                      'description': '用户id',
                      'required': true,
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{string}  获取成功'
                  }
              }
          }
      },
      '/xiedian_fixing/AddBinding': {
          'post': {
              'tags': [
                  'xiedian_fixing'
              ],
              'description': '添加绑定',
              'operationId': 'XiedianFixingController.AddBinding',
              'parameters': [
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'userId',
                      'description': '用户id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'fixingId',
                      'description': '设备id的密文',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'fixingName',
                      'description': '设备名称',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'fixingPassword',
                      'description': '设备密码',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'icon',
                      'description': '设备头像',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'isDefault',
                      'description': '是否默认  0：否；1：是',
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{string}  绑定成功'
                  }
              }
          }
      },
      '/xiedian_fixing/AddFixingFence': {
          'post': {
              'tags': [
                  'xiedian_fixing'
              ],
              'description': '添加设备围栏',
              'operationId': 'XiedianFixingController.AddFixingFence',
              'parameters': [
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'userId',
                      'description': '用户id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'fixingId',
                      'description': '设备id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'fenceName',
                      'description': '围栏名称',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'fenceLongitude',
                      'description': '围栏经度',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'fenceLatitude',
                      'description': '围栏纬度',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'fenceRadius',
                      'description': '围栏半径 单位：米，取值范围(0,5000]',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'fenceDetail',
                      'description': '围栏描述',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'fencePic',
                      'description': '围栏坐标图',
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{string} 添加成功'
                  }
              }
          }
      },
      '/xiedian_fixing/DelFence': {
          'post': {
              'tags': [
                  'xiedian_fixing'
              ],
              'description': '删除设备围栏',
              'operationId': 'XiedianFixingController.DelFence',
              'parameters': [
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'userId',
                      'description': '用户id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'fixingId',
                      'description': '设备id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'fenceId',
                      'description': '围栏id',
                      'required': true,
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{string} 删除成功'
                  }
              }
          }
      },
      '/xiedian_fixing/Delbinding': {
          'post': {
              'tags': [
                  'xiedian_fixing'
              ],
              'description': '管理员删除绑定',
              'operationId': 'XiedianFixingController.Delbinding',
              'parameters': [
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'userId',
                      'description': '用户id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'fixingId',
                      'description': '设备id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'bindingUserId',
                      'description': '绑定设备的用户Id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'style',
                      'description': '0：驳回，1：解绑',
                      'required': true,
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{string} 操作成功'
                  }
              }
          }
      },
      '/xiedian_fixing/GetBindinginfo': {
          'post': {
              'tags': [
                  'xiedian_fixing'
              ],
              'description': '获取用户绑定信息',
              'operationId': 'XiedianFixingController.GetBindinginfo',
              'parameters': [
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'userId',
                      'description': '用户id',
                      'required': true,
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{string} data'
                  }
              }
          }
      },
      '/xiedian_fixing/GetFence': {
          'post': {
              'tags': [
                  'xiedian_fixing'
              ],
              'description': '获取设备围栏信息',
              'operationId': 'XiedianFixingController.GetFence',
              'parameters': [
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'userId',
                      'description': '用户id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'fixingId',
                      'description': '设备id',
                      'required': true,
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{string} data'
                  }
              }
          }
      },
      '/xiedian_fixing/GetFixingId': {
          'post': {
              'tags': [
                  'xiedian_fixing'
              ],
              'description': '获取设备ID',
              'operationId': 'XiedianFixingController.GetFixingId',
              'parameters': [
                  {
                      'in': 'formData',
                      'name': 'code',
                      'description': '二维码密文',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'userId',
                      'description': '用户id',
                      'required': true,
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{int}'
                  },
                  '403': {
                      'description': 'body is empty'
                  }
              }
          }
      },
      '/xiedian_fixing/GetFixingbindinginfo': {
          'post': {
              'tags': [
                  'xiedian_fixing'
              ],
              'description': '获取设备绑定列表',
              'operationId': 'XiedianFixingController.GetFixingbindinginfo',
              'parameters': [
                  {
                      'in': 'formData',
                      'name': 'userId',
                      'description': '用户id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'fixingId',
                      'description': '设备Id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'required': true,
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {}
              }
          }
      },
      '/xiedian_fixing/GetFixinginfo': {
          'post': {
              'tags': [
                  'xiedian_fixing'
              ],
              'description': '获取指定设备信息',
              'operationId': 'XiedianFixingController.GetFixinginfo',
              'parameters': [
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'userId',
                      'description': '用户id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'fixingId',
                      'description': '设备id',
                      'required': true,
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{string} data'
                  }
              }
          }
      },
      '/xiedian_fixing/GetLastPosition': {
          'post': {
              'tags': [
                  'xiedian_fixing'
              ],
              'description': '获取设备最近一次定位',
              'operationId': 'XiedianFixingController.GetLastPosition',
              'parameters': [
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'userId',
                      'description': '用户id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'fixingId',
                      'description': '设备id',
                      'required': true,
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{string} data'
                  }
              }
          }
      },
      '/xiedian_fixing/GetLastPositionSmall': {
          'post': {
              'tags': [
                  'xiedian_fixing'
              ],
              'description': '微信小程序获取设备最近一次定位',
              'operationId': 'XiedianFixingController.GetLastPositionSmall',
              'parameters': [
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'userId',
                      'description': '用户id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'fixingId',
                      'description': '设备id',
                      'required': true,
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{string} data'
                  }
              }
          }
      },
      '/xiedian_fixing/GetTrack': {
          'post': {
              'tags': [
                  'xiedian_fixing'
              ],
              'description': '获取指定时间戳内的轨迹',
              'operationId': 'XiedianFixingController.GetTrack',
              'parameters': [
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'userId',
                      'description': '用户id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'fixingId',
                      'description': '设备id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'startTime',
                      'description': '开始时间 格式：2006-01-02 15:04:05',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'stopTime',
                      'description': '结束时间 格式：2006-01-02 15:04:05',
                      'required': true,
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{string} data'
                  }
              }
          }
      },
      '/xiedian_fixing/GetTrackList': {
          'post': {
              'tags': [
                  'xiedian_fixing'
              ],
              'description': '获取指定时间戳内的轨迹(文字列表)',
              'operationId': 'XiedianFixingController.GetTrackList',
              'parameters': [
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'userId',
                      'description': '用户id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'fixingId',
                      'description': '设备id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'time',
                      'description': '开始日期 格式：2006-01-02',
                      'required': true,
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{string} data'
                  }
              }
          }
      },
      '/xiedian_fixing/GetTrackNew': {
          'post': {
              'tags': [
                  'xiedian_fixing'
              ],
              'description': '获取指定时间戳内的轨迹',
              'operationId': 'XiedianFixingController.GetTrackNew',
              'parameters': [
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'userId',
                      'description': '用户id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'fixingId',
                      'description': '设备id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'time',
                      'description': '开始日期 格式：2006-01-02',
                      'required': true,
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{string} data'
                  }
              }
          }
      },
      '/xiedian_fixing/Unbind': {
          'post': {
              'tags': [
                  'xiedian_fixing'
              ],
              'description': '解除绑定',
              'operationId': 'XiedianFixingController.Unbind',
              'parameters': [
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'userId',
                      'description': '用户id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'fixingId',
                      'description': '设备id',
                      'required': true,
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{string} 解绑成功'
                  }
              }
          }
      },
      '/xiedian_fixing/UpdateFixingBindingState': {
          'post': {
              'tags': [
                  'xiedian_fixing'
              ],
              'description': '修改设备绑定信息-通过绑定',
              'operationId': 'XiedianFixingController.UpdateFixingBindingState',
              'parameters': [
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'userId',
                      'description': '用户id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'fixingId',
                      'description': '设备id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'bindingUserId',
                      'description': '绑定设备的用户Id',
                      'required': true,
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{string} 修改成功'
                  }
              }
          }
      },
      '/xiedian_fixing/UpdateFixingEmergencyContact': {
          'post': {
              'tags': [
                  'xiedian_fixing'
              ],
              'description': '修改设备信息-紧急联系人',
              'operationId': 'XiedianFixingController.UpdateFixingEmergencyContact',
              'parameters': [
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'userId',
                      'description': '用户id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'fixingId',
                      'description': '设备id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'emergencyContact',
                      'description': '紧急联系人号码',
                      'required': true,
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{string} 修改成功'
                  }
              }
          }
      },
      '/xiedian_fixing/UpdateFixingFence': {
          'post': {
              'tags': [
                  'xiedian_fixing'
              ],
              'description': '修改设备围栏',
              'operationId': 'XiedianFixingController.UpdateFixingFence',
              'parameters': [
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'fenceId',
                      'description': '围栏id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'userId',
                      'description': '用户id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'fixingId',
                      'description': '设备id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'fenceName',
                      'description': '围栏名称',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'fenceLongitude',
                      'description': '围栏经度',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'fenceLatitude',
                      'description': '围栏纬度',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'fenceRadius',
                      'description': '围栏半径 单位：米，取值范围(0,5000]',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'fenceDetail',
                      'description': '围栏描述',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'fencePic',
                      'description': '围栏坐标图',
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{string} 修改成功'
                  }
              }
          }
      },
      '/xiedian_fixing/UpdateFixingIsDefault': {
          'post': {
              'tags': [
                  'xiedian_fixing'
              ],
              'description': '修改设备绑定信息-是否默认设备',
              'operationId': 'XiedianFixingController.UpdateFixingIsDefault',
              'parameters': [
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'userId',
                      'description': '用户id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'fixingId',
                      'description': '设备id',
                      'required': true,
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{string} 修改成功'
                  }
              }
          }
      },
      '/xiedian_fixing/UpdateFixingManager': {
          'post': {
              'tags': [
                  'xiedian_fixing'
              ],
              'description': '修改设备信息-管理员',
              'operationId': 'XiedianFixingController.UpdateFixingManager',
              'parameters': [
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'userId',
                      'description': '用户id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'fixingId',
                      'description': '设备id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'managerId',
                      'description': '设备新管理员Id',
                      'required': true,
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{string} 修改成功'
                  }
              }
          }
      },
      '/xiedian_fixing/UpdateFixingMode': {
          'post': {
              'tags': [
                  'xiedian_fixing'
              ],
              'description': '修改设备信息-设备模式 mode 0：省电；1：普通；',
              'operationId': 'XiedianFixingController.UpdateFixingMode',
              'parameters': [
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'userId',
                      'description': '用户id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'fixingId',
                      'description': '设备id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'mode',
                      'description': '设备模式',
                      'required': true,
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{string} 修改成功'
                  }
              }
          }
      },
      '/xiedian_fixing/UpdateFixingModetest': {
          'post': {
              'tags': [
                  'xiedian_fixing'
              ],
              'description': '修改设备信息-设备模式 mode 0：省电；1：普通；',
              'operationId': 'XiedianFixingController.UpdateFixingModetest',
              'parameters': [
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'userId',
                      'description': '用户id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'fixingId',
                      'description': '设备id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'mode',
                      'description': '设备模式',
                      'required': true,
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{string} 修改成功'
                  }
              }
          }
      },
      '/xiedian_fixing/UpdateFixingName': {
          'post': {
              'tags': [
                  'xiedian_fixing'
              ],
              'description': '修改设备绑定信息-命名',
              'operationId': 'XiedianFixingController.UpdateFixingName',
              'parameters': [
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'userId',
                      'description': '用户id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'fixingId',
                      'description': '设备id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'fixingName',
                      'description': '设备命名',
                      'required': true,
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{string} 修改成功'
                  }
              }
          }
      },
      '/xiedian_fixing/UpdateFixingPassword': {
          'post': {
              'tags': [
                  'xiedian_fixing'
              ],
              'description': '修改设备信息-设备密码',
              'operationId': 'XiedianFixingController.UpdateFixingPassword',
              'parameters': [
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'userId',
                      'description': '用户id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'fixingId',
                      'description': '设备id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'fixingPassword',
                      'description': '设备密码',
                      'required': true,
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{string} 修改成功'
                  }
              }
          }
      },
      '/xiedian_fixing/UpdateFixinginfoIcon': {
          'post': {
              'tags': [
                  'xiedian_fixing'
              ],
              'description': '修改设备绑定信息-头像',
              'operationId': 'XiedianFixingController.UpdateFixinginfoIcon',
              'parameters': [
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'userId',
                      'description': '用户id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'fixingId',
                      'description': '设备id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'icon',
                      'description': '用户头像',
                      'required': true,
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{string} 修改成功'
                  }
              }
          }
      },
      '/xiedian_home/GetImageList': {
          'get': {
              'tags': [
                  'xiedian_home'
              ],
              'description': '获取图片列表',
              'operationId': 'XiedianHomeController.GetImageList',
              'responses': {
                  '200': {}
              }
          }
      },
      '/xiedian_home/GetLaunchPage': {
          'get': {
              'tags': [
                  'xiedian_home'
              ],
              'description': '获取启动页',
              'operationId': 'XiedianHomeController.GetLaunchPage',
              'responses': {
                  '200': {}
              }
          }
      },
      '/xiedian_home/GetShareDownload': {
          'post': {
              'tags': [
                  'xiedian_home'
              ],
              'description': '获取下载分享链接',
              'operationId': 'XiedianHomeController.GetShareDownload',
              'parameters': [
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'userId',
                      'description': '用户id',
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': 'string 获取成功'
                  }
              }
          }
      },
      '/xiedian_login/IsLoginType': {
          'get': {
              'tags': [
                  'xiedian_login'
              ],
              'description': '是否出现第三方登录',
              'operationId': 'XiedianLoginController.是否出现第三方登录',
              'responses': {
                  '200': {
                      'description': '{int} IsOhterLogin 第三方登录  0：无1：有'
                  }
              }
          }
      },
      '/xiedian_login/OtherAddAccount': {
          'post': {
              'tags': [
                  'xiedian_login'
              ],
              'description': '第三方注册/登录',
              'operationId': 'XiedianLoginController.第三方注册/登录',
              'parameters': [
                  {
                      'in': 'formData',
                      'name': 'platform',
                      'description': '用户所属平台  2微信 3 QQ 4微博',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'platformId',
                      'description': '账号ID 手机号、第三方平台唯一标识',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'nickName',
                      'description': '用户昵称.',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'icon',
                      'description': '用户头像 https://abuimg.0577xiedu.net/systemresources/icon.png',
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{int}'
                  },
                  '403': {
                      'description': 'body is empty'
                  }
              }
          }
      },
      '/xiedian_login/PhoneLoginAccount': {
          'post': {
              'tags': [
                  'xiedian_login'
              ],
              'description': '手机登录',
              'operationId': 'XiedianLoginController.手机登录',
              'parameters': [
                  {
                      'in': 'formData',
                      'name': 'phone',
                      'description': '手机号',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'password',
                      'description': '密码',
                      'required': true,
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{int}'
                  },
                  '403': {
                      'description': 'body is empty'
                  }
              }
          }
      },
      '/xiedian_login/PhonePasswordGet': {
          'post': {
              'tags': [
                  'xiedian_login'
              ],
              'description': '手机密码找回',
              'operationId': 'XiedianLoginController.手机注册的用户',
              'parameters': [
                  {
                      'in': 'formData',
                      'name': 'phone',
                      'description': '手机号',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'password',
                      'description': '新密码',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'code',
                      'description': '验证码',
                      'required': true,
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{int}'
                  },
                  '403': {
                      'description': 'body is empty'
                  }
              }
          }
      },
      '/xiedian_login/PhoneRegisterAccount': {
          'post': {
              'tags': [
                  'xiedian_login'
              ],
              'description': '手机注册',
              'operationId': 'XiedianLoginController.手机注册',
              'parameters': [
                  {
                      'in': 'formData',
                      'name': 'phone',
                      'description': '手机号',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'password',
                      'description': '密码',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'code',
                      'description': '验证码',
                      'required': true,
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{int}'
                  },
                  '403': {
                      'description': 'body is empty'
                  }
              }
          }
      },
      '/xiedian_login/SendSms': {
          'post': {
              'tags': [
                  'xiedian_login'
              ],
              'description': '发送信息',
              'operationId': 'XiedianLoginController.发送信息',
              'parameters': [
                  {
                      'in': 'formData',
                      'name': 'phone',
                      'description': '13888888888',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'style',
                      'description': '1登陆2注册3找回密码',
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{int}'
                  },
                  '403': {
                      'description': 'phone is empty'
                  }
              }
          }
      },
      '/xiedian_login/Update': {
          'get': {
              'tags': [
                  'xiedian_login'
              ],
              'operationId': 'XiedianLoginController.更新版本',
              'responses': {
                  '200': {
                      'description': '{int} versionCode 版本号  force：强制更新0非强制1强制 link下载地址 versionName 版本     details描述'
                  }
              }
          }
      },
      '/xiedian_user/AddUserFeedbackData': {
          'post': {
              'tags': [
                  'xiedian_user'
              ],
              'description': '添加-反馈信息',
              'operationId': 'XiedianUserController.AddUserFeedbackData',
              'parameters': [
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'content',
                      'description': '反馈内容',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'contact',
                      'description': '联系方式',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'userId',
                      'description': '用户id',
                      'required': true,
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{string}  添加成功'
                  }
              }
          }
      },
      '/xiedian_user/DelAllMessage': {
          'post': {
              'tags': [
                  'xiedian_user'
              ],
              'description': '删除所有系统消息',
              'operationId': 'XiedianUserController.DelAllMessage',
              'parameters': [
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'userId',
                      'description': '用户id',
                      'required': true,
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{string}'
                  }
              }
          }
      },
      '/xiedian_user/DelMessage': {
          'post': {
              'tags': [
                  'xiedian_user'
              ],
              'description': '删除系统消息',
              'operationId': 'XiedianUserController.DelMessage',
              'parameters': [
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'messageId',
                      'description': '消息id',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'userId',
                      'description': '用户id',
                      'required': true,
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{string}'
                  }
              }
          }
      },
      '/xiedian_user/GetMeInfo': {
          'post': {
              'tags': [
                  'xiedian_user'
              ],
              'description': '获取个人中心-个人信息',
              'operationId': 'XiedianUserController.GetMeInfo',
              'parameters': [
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'userId',
                      'description': '用户id',
                      'required': true,
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'schema': {
                          '$ref': '#/definitions/.CycleClient'
                      }
                  }
              }
          }
      },
      '/xiedian_user/GetMessageDetails': {
          'post': {
              'tags': [
                  'xiedian_user'
              ],
              'description': '获取系统消息详情',
              'operationId': 'XiedianUserController.GetMessageDetails',
              'parameters': [
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'messageId',
                      'description': '消息id',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'userId',
                      'description': '用户id',
                      'required': true,
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{string}'
                  }
              }
          }
      },
      '/xiedian_user/GetMessageList': {
          'post': {
              'tags': [
                  'xiedian_user'
              ],
              'description': '获取系统消息',
              'operationId': 'XiedianUserController.GetMessageList',
              'parameters': [
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'limit',
                      'description': '开始',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'userId',
                      'description': '用户id',
                      'required': true,
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{string}'
                  }
              }
          }
      },
      '/xiedian_user/UpdateUserDescInfo': {
          'post': {
              'tags': [
                  'xiedian_user'
              ],
              'description': '修改用户信息-描述',
              'operationId': 'XiedianUserController.UpdateUserDescInfo',
              'parameters': [
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'userId',
                      'description': '用户id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'desc',
                      'description': '描述',
                      'required': true,
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{string} update success!'
                  }
              }
          }
      },
      '/xiedian_user/UpdateUserIconInfo': {
          'post': {
              'tags': [
                  'xiedian_user'
              ],
              'description': '修改用户信息-头像',
              'operationId': 'XiedianUserController.UpdateUserIconInfo',
              'parameters': [
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'userId',
                      'description': '用户id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'icon',
                      'description': '用户头像',
                      'required': true,
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{string} update success!'
                  }
              }
          }
      },
      '/xiedian_user/UpdateUserNickNameInfo': {
          'post': {
              'tags': [
                  'xiedian_user'
              ],
              'description': '修改用户信息-昵称',
              'operationId': 'XiedianUserController.UpdateUserNickNameInfo',
              'parameters': [
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'userId',
                      'description': '用户id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'nickName',
                      'description': '用户昵称',
                      'required': true,
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{string} update success!'
                  }
              }
          }
      },
      '/xiedian_user/UpdateUserPwdInfo': {
          'post': {
              'tags': [
                  'xiedian_user'
              ],
              'description': '修改用户信息-密码',
              'operationId': 'XiedianUserController.UpdateUserPwdInfo',
              'parameters': [
                  {
                      'in': 'header',
                      'name': 'Authorization',
                      'description': 'jwttoken',
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'userId',
                      'description': '用户id',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'oldPassword',
                      'description': '用户原密码',
                      'required': true,
                      'type': 'string'
                  },
                  {
                      'in': 'formData',
                      'name': 'newPassword',
                      'description': '用户新密码',
                      'required': true,
                      'type': 'string'
                  }
              ],
              'responses': {
                  '200': {
                      'description': '{string} update success!'
                  }
              }
          }
      }
  },
  'definitions': {
      '.CycleClient': {
          'type': 'object'
      }
  },
  'tags': [
      {
          'name': 'xiedian_login',
          'description': 'XiedianLoginController operations for XiedianAccount\n'
      },
      {
          'name': 'xiedian_home',
          'description': 'XiedianHomeController operations for HomePage\n'
      },
      {
          'name': 'xiedian_admin',
          'description': 'XiedianAdminController operations for XiedianAdmin\n'
      },
      {
          'name': 'xiedian_user',
          'description': 'XiedianUserController operations for XiedianUser\n'
      },
      {
          'name': 'xiedian_fixing',
          'description': 'XiedianFixingController operations for Fixinginfo\n'
      },
      {
          'name': 'xiedian_commonweal',
          'description': 'XiedianCommonwealController operations for XiedianCommonweal\n'
      }
  ]
}
let url = {}
const host = 'https://datainterface.abpao.com/v1'

for (let key in swagger.paths) {
  if (swagger.paths.hasOwnProperty(key)) {
    url[key.replace(/(^\/\w*\/)/g, '')] = host + key
  }
}

export default url