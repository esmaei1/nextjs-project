import { Controller, Get } from '@nestjs/common';
import { CustomersService } from '../../services/customers/customers.service';

@Controller('customer')
export class CustomerController {

    constructor(private customersService: CustomersService) {

    }

    @Get()
    customer() {
        return this.customersService.findCustomers();
    }

}
