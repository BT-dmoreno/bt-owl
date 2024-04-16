##############################################################################
# Copyright (c) 2024 braintec AG (https://braintec.com)
# All Rights Reserved
#
# Licensed under the Odoo Proprietary License v1.0 (OPL).
# See LICENSE file for full licensing details.
##############################################################################
{
    'name': 'Find It',
    'version': '17.0.1.0.0',
    'summary': 'Finding Emojis Game',
    'category': 'Games',
    'author': 'braintec AG',
    'website': 'https://braintec.com',
    'license': 'OPL-1',
    'depends': [
        'web',
    ],
    'data': [
        'views/templates.xml',
    ],
    'application': True,
    'installable': True,
    'assets': {
        'web.assets_frontend': [
            # include all src from our module
            'bt_find_it/static/src/**/*',
        ],
    },
}
