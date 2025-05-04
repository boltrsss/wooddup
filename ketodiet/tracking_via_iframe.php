<?php
/*
 * Example PHP Script for iframe tracking
 *

 1. In the tracking code, you may use the placeholders:

    Order form and thank you page:

        <?=@$_GET["__product_id__"]?>
        <?=@$_GET["__affiliate_name__"]?>
        <?=@$_GET["__url__"]?>
        <?=@$_GET["__http_referrer__"]?>
        <?=@$_GET["__trackingkey__"]?>
        <?=@$_GET["__fake_document_cookie__"]?>
        <?=@$_GET["__cid__"]?>
        <?=@$_GET["__sid1__"]?>
        <?=@$_GET["__sid2__"]?>
        <?=@$_GET["__sid3__"]?>
        <?=@$_GET["__sid4__"]?>
        <?=@$_GET["__sid5__"]?>
        <?=@$_GET["__utm_source__"]?>
        <?=@$_GET["__utm_medium__"]?>
        <?=@$_GET["__utm_campaign__"]?>
        <?=@$_GET["__utm_term__"]?>
        <?=@$_GET["__utm_content__"]?>
        <?=@$_GET["__custom__"]?>
        <?=@$_GET["__currency__"]?>
        <?=@$_GET["__netto_amount__"]?>

    Thank you page only:

        <?=@$_GET["__order_id__"]?>
        <?=@$_GET["__vendor_amount__"]?>
        <?=@$_GET["__affiliate_amount__"]?>
        <?=@$_GET["__billing_type__"]?>
        <?=@$_GET["__first_amount__"]?>
        <?=@$_GET["__other_amounts__"]?>
        <?=@$_GET["__first_billing_interval__"]?>
        <?=@$_GET["__other_billing_intervals__"]?>
        <?=@$_GET["__tag__"]?>
        <?=@$_GET["__variant_key__"]?>
        <?=@$_GET["__variant_name__"]?>
        <?=@$_GET["__eticket_location__"]?>
        <?=@$_GET["__eticket_date__"]?>


 2. Replace the example script below by your tracking code.

 3. Add placeholders to the code, if needed

 4. In digistore, add a new tracking: https://www.digistore24.com/vendor/settings/tracking/orderform_edit/new/
    - select type: tracking pixel
    - select html tag: iframe
    - as URL enter the url to your script. Add __all_params__ to add all placeholders GET parameters, e.G.:
      https://www.example.com/?__all_params__
*/
?>

<script>
    console.log( 'The product id is <?=@$_GET["product_id"]?>!' );
</script>







<!--

Copyright (c) 2025 

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
associated documentation files (the "Software"), to deal in the Software without restriction,
including without limitation the rights to use, copy, modify, merge, publish, distribute,
sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or
substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT
NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
-->