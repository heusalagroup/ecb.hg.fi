// Copyright (c) 2022. Heusala Group <info@heusalagroup.fi>. All rights reserved.

import {
    GetMapping,
    RequestHeader,
    RequestMapping,
} from "../fi/hg/core/Request";
import { ResponseEntity } from "../fi/hg/core/request/ResponseEntity";
import { LogService } from "../fi/hg/core/LogService";
import { createEcbDTO, EcbDTO } from "../fi/hg/core/types/EcbDTO";
import { createErrorDTO, ErrorDTO } from "../fi/hg/core/types/ErrorDTO";
import { CurrencyService } from "../fi/hg/core/CurrencyService";

const LOG = LogService.createLogger('BackendController');

@RequestMapping("/")
export class EcbBackendController {

    static _currencyService : CurrencyService | undefined = undefined;

    public static setCurrencyService (service : CurrencyService) {
        this._currencyService = service;
    }

    @GetMapping("/")
    public static async getIndex (
        @RequestHeader('Authorization', {
            required: false,
            defaultValue: ''
        })
        token: string
    ): Promise<ResponseEntity<EcbDTO | ErrorDTO>> {
        try {
            const rates = await this._currencyService.getRates();
            if (rates === undefined) {
                return ResponseEntity.internalServerError<ErrorDTO>().body(
                    createErrorDTO('Service was not initialized', 500)
                );
            }
            return ResponseEntity.ok( createEcbDTO(rates) );
        } catch (err) {
            LOG.error(`ERROR: `, err);
            return ResponseEntity.internalServerError<ErrorDTO>().body(
                createErrorDTO('Internal Server Error', 500)
            );
        }
    }

}
