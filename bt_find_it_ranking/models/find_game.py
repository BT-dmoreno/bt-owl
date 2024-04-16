##############################################################################
# Copyright (c) 2024 braintec AG (https://braintec.com)
# All Rights Reserved
#
# Licensed under the Odoo Proprietary License v1.0 (OPL).
# See LICENSE file for full licensing details.
##############################################################################

from odoo import fields, models


class FindGame(models.Model):
    _name = 'find.game'
    _description = 'Find Game'

    player = fields.Char()
    points = fields.Integer()
