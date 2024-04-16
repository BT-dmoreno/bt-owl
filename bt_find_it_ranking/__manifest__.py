##############################################################################
# Copyright (c) 2024 braintec AG (https://braintec.com)
# All Rights Reserved
#
# Licensed under the Odoo Proprietary License v1.0 (OPL).
# See LICENSE file for full licensing details.
##############################################################################
{
    'name': 'Find It Ranking',
    'version': '17.0.1.0.0',
    'summary': 'Raking for the Emojis Game',
    'category': 'Games',
    'author': 'braintec AG',
    'website': 'https://braintec.com',
    'license': 'OPL-1',
    'depends': [
        'bt_find_it',
    ],
    'data': [
        'security/ir.model.access.csv',
    ],
    'application': False,
    'assets': {
        'web.assets_frontend': [
            'bt_find_it_ranking/static/src/**/*',
        ],
    },
}
