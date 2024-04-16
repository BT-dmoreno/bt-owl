##############################################################################
# Copyright (c) 2024 braintec AG (https://braintec.com)
# All Rights Reserved
#
# Licensed under the Odoo Proprietary License v1.0 (OPL).
# See LICENSE file for full licensing details.
##############################################################################

from odoo import http
from odoo.http import request


class FindItGame(http.Controller):
    @http.route(['/find-it-game'], type='http', auth='user')
    def find_it_game(self):
        """Render the Find It game."""
        return request.render('bt_find_it.page')
