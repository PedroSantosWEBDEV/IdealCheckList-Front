<?php

namespace App\Services;

use App\Mail\SendMail;
use Log;
use Mail;

class SendMailService
{

    public function sendTest($email)
    {
        try {
            Mail::to($email)->send(new SendMail());
            return true;
        } catch (\Exception$e) {
            Log::error($e);
            return false;
        }
    }
}
